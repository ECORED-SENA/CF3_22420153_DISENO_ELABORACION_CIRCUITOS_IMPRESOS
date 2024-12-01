<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1.pb-5
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .bg-color-1.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg
              p.mb-0 Este componente formativo presenta una guía práctica para el uso de las herramientas de la ventana #[em Board] en el #[em software] de diseño de circuitos impresos. Con este recurso, los usuarios podrán familiarizarse con los conceptos y funciones básicas necesarias para diseñar circuitos en la tarjeta, desde la ubicación de componentes hasta la configuración de pistas. La ventana #[em Board] permite visualizar los componentes de forma similar a su aspecto real, lo cual facilita la organización y conexión precisa de cada elemento en el diseño. 
            .col-lg-auto
              figure
                  img(src="@/assets/curso/intro/1.png", alt="").mt-4.mt-lg-0

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/2.png", alt="")
          .col-lg
            p.mb-0 A lo largo del documento, se abordarán los pasos para la construcción de una fuente de alimentación, integrando las etapas de transformación, rectificación, regulación y filtrado. Con la correcta aplicación de estas herramientas, los diseñadores podrán optimizar el proceso de creación y asegurar que el diseño final cumpla con los requerimientos técnicos. 
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
