<template>
    <nav class="header">
        <a href="/"><img src="../assets/img/logo.png" alt=""></a>
        <router-link class="nav-item" :to="{name : 'Home'}">Home</router-link> |
        <a class="nav-item" href="#home">Servicios</a>  |
        <a class="nav-item" href="#news">Noticias </a>  |
        <a class="nav-item" href="#users">Nosotros</a>|
    
        <router-link class="nav-item" :to="{name: 'Login'}" v-if="!isLogin">Login</router-link> 
        <router-link class="nav-item" :to="{name: 'Admin'}" v-else-if="isAdmin">Admin</router-link>
        <router-link class="nav-item" :to="{name: 'Cliente'}" v-else>Cliente</router-link>
        <div class="nav-item bi bi-list"><v-icon medium color="primary" >mdi-menu</v-icon></div>
        <div class="nav-item bi bi-cart4" id="cart-btn"><v-icon medium color="primary" >mdi-cart</v-icon></div>
        <div class="nav-item bi bi-person-fill" id="login-btn"><v-icon medium color="primary" >mdi-account</v-icon></div>  
    </nav>
</template>

<script>
import decode from 'jwt-decode'
export default {
    name: 'TheNavigation',
    computed: {
        isLogin(){
            console.log()
            return localStorage.getItem('token');
        },
        isCliente(){
            let token = decode(localStorage.getItem('token'));
            return token.rol === 'Cliente' ? true : false
        },
        isAdmin(){
            let token = decode(localStorage.getItem('token'));
            return token.rol === 'Administrador' ? true : false
        }
      
    }
}
</script>
<style scoped>
.nav-item {
    font-size: 1.1rem;
    margin: 0 1rem;
    color: var(--blanco) !important;
}

.header a:hover {
    color: var(--azul-hover);
}
</style>