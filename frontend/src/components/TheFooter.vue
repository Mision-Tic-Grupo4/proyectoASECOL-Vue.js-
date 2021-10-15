<template>
  <footer class="footer">

    <div class="footer-info">
      <h4>Sistema de productos de limpieza</h4>
      <h3>Realizado con Vue 2, Express y Mongo DB</h3>
      
      
      <v-btn class="mx-4" dark icon >
        <a id="github" href="https://github.com/Mision-Tic-Grupo4" target="_blank" style="color:white">
          <v-icon size="24px">mdi-github</v-icon>
        </a>
      </v-btn>

      <v-btn class="mx-4" dark icon >
        <a id="github" href="https://drive.google.com/drive/folders/1ngIpm-zesmVHHofRgZpTYww5Sw9kfVd1" target="_blank" style="color:white">
          <v-icon size="24px">mdi-google-drive</v-icon>
        </a>
      </v-btn>
    </div>

    <div class="vertical-line" ></div>
    
    <div class="footer-team">
        <div>
            <h2>Estefania Urro Vasquez</h2>
            <h2>Rol: Desarollo</h2> 
        </div>
        <div>
            <h2>Cristhian David Giraldo</h2>
            <h2>Rol: Desarollo</h2> 
        </div>
    </div>

    <div class="vertical-line"></div>

    <div class="footer-logo">
        <img src="../assets/img/LOGO asecol-04.png" alt="">
    </div>

  </footer>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>