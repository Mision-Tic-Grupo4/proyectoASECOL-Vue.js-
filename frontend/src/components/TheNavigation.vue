<template>
    <header class="header">
        <a href="#home">
            <img src="../assets/img/logo.png" alt="">
        </a>

        <nav class="navbar">
            <router-link :to="{
                name : 'Home'
            }">Home</router-link>
            <!-- <nav > -->
                <a href="#services">Servicios</a>
                <a href="#news">Noticias </a>
                <a href="#users">Nosotros </a>
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
        </nav>

        <div class="icons">
            <!-- <div class="bi bi-list"><v-icon medium color="primary" >mdi-menu</v-icon></div>
            <div class="bi bi-cart4" id="cart-btn"><v-icon medium color="primary" >mdi-cart</v-icon></div>
            <div class="bi bi-person-fill" id="login-btn"><v-icon medium color="primary" >mdi-account</v-icon></div> -->
            <div class="bi bi-list" id="menu-btn"></div>
            <div class="bi bi-cart4" id="cart-btn"></div>
            <div class="bi bi-person-fill" id="login-btn"></div>
        </div>

        <!-- Carrito -->
        <div class="shopping-cart">
            <div class="box">
                <i class="bi bi-trash-fill"></i>
                <img src="../assets/img/recogedor-mano.jpg" alt="">
                <div class="content">
                    <h3>Recogedor</h3>
                    <span class="price">$7.000/-</span>
                    <span class="quantity">Cant: 1</span>
                </div>
            </div>

            <div class="box">
                <i class="bi bi-trash-fill"></i>
                <img src="../assets/img/escurridor.png" width="90px" alt="">
                <div class="content">
                    <h3>Escurridor</h3>
                    <span class="price">$17.000/-</span>
                    <span class="quantity">Cant: 1</span>
                </div>
            </div>

            <div class="box">
                <i class="bi bi-trash-fill"></i>
                <img src="../assets/img/trapero.png" alt="">
                <div class="content">
                    <h3>Trapero</h3>
                    <span class="price">$10.000</span>
                    <span class="quantity">Cant: 1</span>
                </div>
            </div>

            <div class="total"> Total: 34.000/-</div>
            <a href="#" class="btn">Verificar</a>
        </div>

    </header>
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