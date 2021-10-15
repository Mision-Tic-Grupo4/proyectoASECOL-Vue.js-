<template>
   <main class="main">

        <!-- Home section starts -->
        <section class="home" id="home">

            <div class="image">
                <img src="../assets/img/img_grande.jpg" alt="">
            </div>

            <div class="content">
                <h3>Más que productos de aseo,</h3>
                <h2>somos tu mejor aliado</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>

                <a href="#" class="btn">Ver Productos</a>
            </div>

        </section>
        <!-- Home section ends -->

        <!-- Services Section starts -->
        <section class="services" id="services">

            <div class="floating-information">
                <div class="floating-container">
                    <div class="icon-text">
                        <img src="../assets/img/ambulancia.png" alt="" width="87" height="45">
                        <p>Envíos a Todo el País</p>
                    </div>
                    <div class="icon">
                        <img src="../assets/img/Rectangle.svg" alt="">
                    </div>

                    <div class="icon-text">
                        <img src="../assets/img/operador.png" alt="" width="45" height="45">
                        <p>Atención 24 Horas </p>
                    </div>
                    <div class="icon">
                        <img src="../assets/img/Rectangle.svg" alt="">
                    </div>

                    <div class="icon-text">
                        <img src="../assets/img/escudo.png" alt="" width="45" height="45">
                        <p>Pagos Seguros</p>
                    </div>
                </div>
            </div>

            <h1 class="services-heading">Nuestros Servicios</h1>

            <div class="box-container">
                <div class="box">
                    <img src="../assets/img/elementos-aseo.png" alt="">
                    <h3>Proveedor Mayorista y Minorista</h3>
                    <div class="green-border"
                      ></div>
                </div>
         
                <div class="box">
                    <img src="../assets/img/carrito-aseo.png" alt="">
                    <h3>Accesorios e Insumos para Empresas</h3>
                    <div class="green-border"></div>
                </div>

                <div class="box">
                    <img src="../assets/img/capacitacion-aseo.png" alt="">
                    <h3>Capacitaciones y Asesorias</h3>
                    <div class="green-border"></div>
                </div>
            </div>

        </section>
        <!-- Services Section starts -->

         <!-- News Section starts -->

        <section class="news" id="news">
            <h1 class="heading heading-top">Noticias</h1>
            <div class="row">
                <div class="column"  v-for="(noticia,index) in this.news" :key="index">
                    <div class="card">
                        <div class="wrapper">
                            <div class="image">
                               <img class="book-image" :src="news[index].poster"/>
                            </div>
                            <div class="data">
                                <div class="content">
                                    <h1 class="title">{{noticia.nombre}}</h1>
                                    <p class="text">{{noticia.descripcion}}</p>
                                    <a class="news-btn" target="_blank" :href="news[index].link">Leer más</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
    
               
    
                
              
            </div>
        </section>
        <!-- News Section ends -->

        <!-- Users Section starts -->
        <section class="users" id="users">

            <h1 class="heading heading-top">NOSOTROS</h1>
            <div class="box-container">
                <div class="box">
                    <img src="../assets/img/user.png" alt="">
                    <h3>Estefania Urro Vasquez </h3>
                    <div class="blue-border"></div>
                </div>
         
                <div class="box">
                    <img src="../assets/img/user.png" alt="">
                    <h3>Cristhian David Giraldo</h3>
                    <div class="blue-border"></div>
                </div>
            </div>

        </section>
        <!-- Users Section ends -->

    </main>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      news: [
      {
        "nombre": "TapTapp, la app para contratar servicios de aseo doméstico y limpieza, llega a Colombia",
        "descripcion": "Con el objetivo de impulsar a las más de 680.000 trabajadoras de servicio doméstico que actualmente hay en el país...",
        "link": "https://www.larepublica.co/empresas/taptapp-la-app-para-contratar-servicios-de-aseo-domestico-y-limpieza-llega-a-colombia-3219439",
        "poster": "https://img.lalr.co/cms/2021/08/19105758/WhatsApp-Image-2021-08-19-at-9.11.10-AM.jpeg"
      },
      {
        "nombre": "Lanzamos una plataforma para que las empresas puedan comprar paquetes de limpieza",
        "descripcion": "La compañía de servicios de limpieza ve un panorama positivo para este año y espera aumentar su número de colaboradoras a 800...",
        "link": "https://www.larepublica.co/empresas/los-nuevos-cierres-y-olas-de-contagio-generan-temor-en-pedir-servicios-de-limpieza-3162710",
        "poster": "https://img.lalr.co/cms/2021/04/30170100/COLFUTURO_Juan-Sebasti%C3%A1n-Cadavid-Salom_Bogot%C3%A1_004.jpg?size=sm"
      },
      {
        "nombre": "Aromatel lanzó ecobotella con la que ahorrará 2,8 millones de envases de plástico virgen",
        "descripcion": "Este nuevo producto hace parte del objetivo de la compañía de tener empaques reutilizables, reciclables o compostables para 2025...",
        "link": "https://www.larepublica.co/responsabilidad-social/aromatel-lanzo-ecobotella-con-la-que-ahorrara-28-millones-de-envases-de-plastico-virgen-3221678",
        "poster": "https://img.lalr.co/cms/2021/08/24105312/AMT-Green-PackShot-Manzana-ET-900ml.png?size=sm"
      },
      {
        "nombre": "Invima otorgó la NSO de los productos de Clorox que eliminan el virus del covid-19",
        "descripcion": "La entidad recibió pruebas de los productos de la marca y determinó que cumplen con los estándares señalados en la norma vigente...",
        "link": "https://www.larepublica.co/empresas/invima-aprueba-la-efectividad-de-productos-clorox-para-eliminar-el-covid-en-superficies-3162375",
        "poster": "https://img.lalr.co/cms/2021/04/05115444/WhatsApp-Image-2021-05-04-at-2.15.11-PM.jpeg?size=sm"
      }
      
    ]
    }),
  }
</script>
x