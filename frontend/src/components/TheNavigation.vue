<template>
    <div id="nav" class="header">
        <a href="/">
            <img src="../assets/img/logo.png" alt="">
        </a>
        <router-link :to="{
            name : 'Home'
        }">Home</router-link> |
        <!-- <nav > -->
            <a href="#home">Servicios</a>  |
            <a href="#news">Noticias </a>  |
            <a href="#users">Nosotros </a>  |
        <!-- </nav>   -->
        
        <router-link :to="{
            name: 'Login'
        }"
        v-if="!isLogin"
        >Login</router-link> 

        <router-link :to="{
            name: 'Admin'
        }"
        v-else-if="isAdmin">Admin</router-link>

        <router-link :to="{
            name: 'Cliente'
        }"
        v-else>Cliente</router-link>
            <div class="bi bi-list"><v-icon medium color="primary" >mdi-menu</v-icon></div>
            <div class="bi bi-cart4" id="cart-btn"><v-icon medium color="primary" >mdi-cart</v-icon></div>
            <div class="bi bi-person-fill" id="login-btn"><v-icon medium color="primary" >mdi-account</v-icon></div>
             
    </div>
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