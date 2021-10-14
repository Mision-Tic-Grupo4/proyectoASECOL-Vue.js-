import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import decode from 'jwt-decode'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/cliente',
        name: 'Cliente',
        component: () => import(/* webpackChunkName: "cliente" */ '../views/Cliente.vue'),
        meta: { 
            requiresAuth: true 
        },
        children: [
            {
                path: 'gestor',
                name: 'Gestor',
                component: () => import(/* webpackChunkName: "cliente" */ '../components/ClienteDT.vue'),
                meta: {
                    Cliente : true
                }
            },
            {
                path: 'categoria',
                name: 'Categoria',
                component: () => import(/* webpackChunkName: "cliente" */ '../components/CategoriasCd.vue'),
            },
            {
                path: 'producto',
                name: 'Producto',
                component: () => import(/* webpackChunkName: "cliente" */ '../components/ProductosCd.vue'),
            },
        ]
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
        meta: { 
            requiresAuth: true 
        },
        children: [
            {
                path: 'usuarios',
                name: 'Usuarios',
                component: () => import(/* webpackChunkName: "usuarios" */ '../components/UsuariosDT.vue'),
                meta: {
                    Administrador : true
                }
            },
            {
                path: 'categorias',
                name: 'Categorias',
                component: () => import(/* webpackChunkName: "categoria" */ '../components/CategoriaDT.vue'),
              
            },
            {
                path: 'productos',
                name: 'Productos',
                component: () => import(/* webpackChunkName: "producto" */ '../components/ProductoDT.vue'),
               
            },
        ]
    }
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        
        let token = localStorage.getItem('token');
        
        if (!token) {
            next({
                name: 'Login',
            })
        } else {
            //si requiere Administrador
            // let auxRol = token;
            let auxRol = decode(token);
            let rolToken = auxRol.rol;
            console.log('Antes de validar ' ,rolToken)
            if (to.matched.some(record => record.meta.Administrador)) {
                if (rolToken === 'Administrador') {
                    console.log('Despues de validar ' ,rolToken)
                    next()
                }else {
                   name: 'Admin'
                }
            }else {
                next()
            }
            if (to.matched.some(record => record.meta.Cliente)) {
                if (rolToken === 'Cliente') {
                    console.log('Despues de validar ' ,rolToken)
                    next()
                }else {
                   name: 'Cliente'
                }
            }else {
                next()
            }
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router
