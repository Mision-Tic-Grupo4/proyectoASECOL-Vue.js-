<template>
  <v-container >

  <v-card 
    v-for="(categoria,index) in this.categorias" :key="index"
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


    <v-card-title>{{categoria.nombre}}</v-card-title>

    <v-card-text>
      <div>{{categoria.descripcion}}</div>
    </v-card-text>
    
  </v-card>
  
  </v-container>
</template>

<script>
import axios from "axios";
  export default {
    name: 'CategoriasCd',
    data: () => ({
      categorias:[],
    }),
    created () {
      this.list()
    },

    methods: {
      list(){
        axios.get('http://localhost:3000/api/categoria/list')
        .then(response => {
          this.categorias = response.data
          this.cargando = false
        })
        .catch(function (error) {
          console.log(error);
  })

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
   }
    
  
  }
</script>
<style scoped>

</style>
