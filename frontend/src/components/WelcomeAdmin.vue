<template>
  <v-card
    class="mx-auto"
    color="#284854"
    dark
    max-width="800"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
         Bienvenido {{bienvenido.rol}} {{bienvenido.nombre}}
      </v-icon>
    </v-card-title>

    <!-- <v-card-text class="text-h5 font-weight-bold">
        ""
    </v-card-text> -->

    <!-- <v-card-actions>
      <v-list-item class="grow">
           <v-row
          align="left"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-github
          </v-icon>
          
        </v-row> 
      </v-list-item>
     </v-card-actions> -->
  </v-card>
</template>


<script>
import decode from 'jwt-decode'
  export default {
    name: 'WelcomeAdmin',
    data: () => ({
    }),
    computed:{
        bienvenido(){
            let token = decode(localStorage.getItem('token'));
            return token;
        }
    },
    methods: {
      
    }
    
  }
</script>