<template>
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
                    <v-list-item exact :to="{ name:'Home' }" >
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name:'Admin' }" >
                        <v-list-item-icon>
                        <v-icon>mdi-key</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Admin</v-list-item-title>
                    </v-list-item>

                    <v-list-item :to="{ name:'Usuarios' }" >
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Usuarios</v-list-item-title>
                    </v-list-item>

                     <v-list-item :to="{ name:'Categorias' }">
                        <v-list-item-icon>
                            <v-icon>mdi-chart-donut</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Categorias</v-list-item-title>
                    </v-list-item>

                     <v-list-item :to="{ name:'Productos' }" >
                        <v-list-item-icon>
                            <v-icon>mdi-animation-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Productos</v-list-item-title>
                    </v-list-item>

                    
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <section class="mt-10" v-show="['Admin'].includes($route.name)">
                <welcome-admin/>
            </section>
            <router-view/>
        </v-main>
        
    </v-card>
</template>

<script>
import WelcomeAdmin from '../components/WelcomeAdmin.vue';
import decode from 'jwt-decode'
export default {
  components: { WelcomeAdmin },
    name: "Admin",
    data: () => ({
        drawer: false,
        group: null,
    }),
    computed:{
        isAdmin(){
            let token = decode(localStorage.getItem('token'));
            return token.rol === 'Administrador' ? true : false
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
 #nav {
    background-color: #798B95;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: 0px 0px 30px 30px;
    width: 100vw;
    padding: 30px;
    display: flex;
    align-items: center;
}

#nav a {
    font-weight: bold;
    color: white;
    padding: 0 30px;
}

#nav a.router-link-exact-active {
    color: #42b983;
    
}
</style>
