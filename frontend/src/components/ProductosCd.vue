<template>
  <v-container >

  <v-card 
    v-for="(producto,index) in this.productos" :key="index"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="250"
        position="center"
        contain
     :src="productos[index].imagen"
     >
    </v-img>

    <v-card-title>{{producto.nombre}}</v-card-title>

    <v-card-text>
      <div class="my-12 text-subtitle-1">
        $ {{producto.precio}}
        
      </div>

      <div>{{producto.descripcion}}</div>
    </v-card-text>
    
  </v-card>
  
  </v-container>
</template>
<script>
import axios from "axios";
  export default {
    name: 'ProductosCd',
    data: () => ({
        productos:[],
        categorias:[]
    }),
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
          this.cargando = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
  }
</script>