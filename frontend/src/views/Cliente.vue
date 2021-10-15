<template>
<div>
    <v-card class="mx-auto overflow-hidden" 
    height="100vh">
    
        <v-app-bar id="nav">

            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Gestor</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text 
            @click="salir">
                <span class="mr-2">Logout</span>
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer 
        v-model="drawer" 
        absolute
        temporary>
            <v-list 
            nav 
            dense>
                <v-list-item-group
                  v-model="group"
                  active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item exact :to="{ name:'Home' }">
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name:'Cliente' }" >
                        <v-list-item-icon>
                        <v-icon>mdi-key</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Cliente</v-list-item-title>
                    </v-list-item>

                   

                     <v-list-item :to="{ name:'Categoria' }" >
                        <v-list-item-icon>
                            <v-icon>mdi-chart-donut</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Categorias</v-list-item-title>
                    </v-list-item>

                     <v-list-item :to="{ name:'Producto' }">
                        <v-list-item-icon>
                            <v-icon>mdi-animation-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Productos</v-list-item-title>
                    </v-list-item>

                    
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            
            <router-view/>
        </v-main>
        
    </v-card>
</div>
</template>

<script>
import ClienteDT from '../components/ClienteDT.vue';
import decode from 'jwt-decode'
export default {
  components: {  ClienteDT },
    name: "Cliente",
    data: () => ({
        drawer: false,
        group: null,
    }),
    computed:{
        isCliente(){
            let token = decode(localStorage.getItem('token'));
            return token.rol === 'Cliente' ? true : false
        }
    },
    methods: {
        salir(){
            localStorage.removeItem('token');
            this.$router.push({
                name: 'Login'
            })
        }
    } 
};
</script>
<style scoped>
#nav{
    background-color: #798B95;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: 0px 0px 30px 30px;
    width: 100vw;
}
</style>
