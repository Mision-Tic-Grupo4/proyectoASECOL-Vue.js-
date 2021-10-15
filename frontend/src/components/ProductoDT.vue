<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="productos"
      sort-by="codigo"
      class="elevation-5"
      :loading="cargando"
      loading-text="Cargando ... Por favor espere"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <h2>Productos</h2>
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Agregar Producto
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.codigo"
                        label="Codigo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        item-text="nombre"
                        item-value="_id"
                        v-model="editedItem.categoria"
                        :items="categorias"
                        :rules="[(v) => !!v || 'Categoria is required']"
                        label="Categorias"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="8" md="4">
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripcion"
                        no-resize
                        auto-grow
                        counter="50"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.precio"
                        label="Precio"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.imagen"
                        label="Imagen"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Seguro que quiere activar o desactivar el ítem?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Aceptar</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon medium color="primary" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon medium color="primary" @click="deleteItem(item)">mdi-delete</v-icon>
        <v-icon medium color="primary" @click="changeItemState(item)">
          <template v-if="item.estado">
            mdi-toggle-switch
          </template>
          <template v-else>
            mdi-toggle-switch-off-outline
          </template>
        </v-icon>
      </template>
      
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductoDT",
  data: () => ({
    categorias: [],
    cargando: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Código", value: "codigo" },
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Categoria", value: "categoria.nombre" },
      { text: "Descripcion", value: "descripcion" },
      { text: "Precio", value: "precio" },
      { text: "Estado", value: "estado" },
      { text: "Actiones", value: "actions", sortable: false },
    ],
    productos: [],
    editedIndex: -1,
    editedItem: {
      _id: "",
      nombre: "",
      codigo: "",
      descripcion: "",
      precio: "",
      imagen: "",
      categoria: "",
      estado: 0,
    },
    defaultItem: {
      _id: "",
      nombre: "",
      codigo: "",
      descripcion: "",
      precio: "",
      imagen: "",
      categoria: "",
      estado: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Agregando articulo"
        : "Editando articulo";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
    this.categoriasListar();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/producto/list")
        .then((response) => {
          this.productos = response.data;
          this.cargando = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    categoriasListar() {
      axios
        .get("http://localhost:3000/api/categoria/listActive")
        .then((response) => {
          this.categorias = response.data;
          // const auxC = response.data;
          // auxC.map((item) => {
          //   this.categorias.push({
          //     text: item.nombre,
          //     value: item._id,
          //   });
          // });
          this.cargando = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editItem(item) {
      this.editedIndex = this.productos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    changeItemState(item) {
      this.editedIndex = this.productos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      if (this.editedItem.estado === 1) {
        axios
          .put("http://localhost:3000/api/producto/disabled", {
            _id: this.editedItem._id,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put("http://localhost:3000/api/producto/enabled", {
            _id: this.editedItem._id,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    deleteItem(item) {
      this.editedIndex = this.productos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
        axios.delete('http://localhost:3000/api/producto/remove', {
            data: {
                _id : this.editedItem._id
            }
        })
        .then((response) => {
            this.list();
        })
        .catch((error) => {
            console.log(error);
        });
            this.closeDelete(); 
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // Object.assign(this.usuarios[this.editedIndex], this.editedItem)
        axios
          .put("http://localhost:3000/api/producto/update", {
            _id: this.editedItem._id,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            categoria: this.editedItem.categoria,
            precio: this.editedItem.precio,
            imagen: this.editedItem.imagen
          })
          .then((response) => {
            this.list();
            // this.usuarios.push(response.data)
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:3000/api/producto/add", {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            categoria: this.editedItem.categoria,
            precio: this.editedItem.precio,
            imagen: this.editedItem.imagen
          })
          .then((response) => {
            this.list();
            // this.usuarios.push(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.close();
    },
  },
};
</script>
