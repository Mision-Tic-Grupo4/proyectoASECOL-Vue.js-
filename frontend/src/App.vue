<template>

  <v-app>
    <!-- <the-header/> -->
    <!-- <header  v-show="!['Admin','Usuarios','Categorias', 'Productos', 'Cliente','Gestor', 'Producto','Categoria' ].includes($route.name)"> -->
    <the-navigation/>

    <router-view/>

    <the-footer/>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { 
    'the-navigation': TheNavigation,
    'the-header': TheHeader,
    'the-footer': TheFooter
  },

  data: () => ({
         

  }),
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', './assets/script.js')
    document.head.appendChild(externalScript)
  },
   
};


</script>


<style>

@import url('assets/style.css');

</style>