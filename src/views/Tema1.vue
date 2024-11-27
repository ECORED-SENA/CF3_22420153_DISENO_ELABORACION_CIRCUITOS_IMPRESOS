<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ventana <em>Board</em>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p.mb-0(data-aos="fade-right") Para acceder a la ventana de #[em BOARD] desde el #[em Schematic], se debe hacer clic en el botón #[em #[b “BOARD”]] ubicado en la barra de herramientas superior. En esta ventana aparecerán los componentes creados en el esquema, junto con sus conexiones. A diferencia del esquema, aquí los componentes se visualizan de manera similar a su aspecto real. Este botón también permite regresar a la vista #[em Schematic]. 
      .col-lg-auto
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/1.svg").mx-auto
      
    .bg-full-width.bg-fondo-1.pb-5
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4(data-aos="flip-up")
              h5 Figura 1.
              span Cambio entre Ventanas de #[em Schematic] y #[em Board] en #[em EAGLE]  
            figure.mb-5
              img(src="@/assets/curso/figuras/1.png", data-aos="zoom-in", alt="Describe la interfaz de EAGLE y cómo alternar entre las vistas de esquema (Schematic) y tarjeta (Board).").mx-auto

            .titulo-sexto.color-acento-contenido.mb-4(data-aos="flip-up")
              h5 Figura 2.
              span Vista General de la Ventana #[em Board] en #[em EAGLE]
            figure
              img(src="@/assets/curso/figuras/2.png", data-aos="zoom-in", alt="Presenta la disposición general de herramientas y áreas de trabajo en la ventana Board, incluyendo la selección de capas y tipos de elementos.").mx-auto

    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Ubicación de los componentes 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p.mb-0 Para acceder a la ventana de #[em BOARD] desde el #[em Schematic], se debe hacer clic en el botón #[em #[b “BOARD”]] ubicado en la barra de herramientas superior. En esta ventana aparecerán los componentes creados en el esquema, junto con sus conexiones. A diferencia del esquema, aquí los componentes se visualizan de manera similar a su aspecto real. Este botón también permite regresar a la vista #[em Schematic]. 
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/2.png").mx-auto

    .bg-full-width.bg-fondo-1.pb-5
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-4(data-aos="flip-up")
              h5 Figura 3.
              span Ejemplo de componentes en la Ventana #[em Board] 
            figure.mb-5
              img(src="@/assets/curso/figuras/3.png", data-aos="zoom-in", alt="Muestra un ejemplo de disposición y conexión de componentes en la ventana Board").mx-auto


    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Reconocimiento de los botones del área de diseño 

    p.mb-5 En la figura 4 se muestran los botones del área de diseño, los cuales permiten realizar acciones específicas en el diseño.

    .bg-full-width.bg-fondo-3
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            .titulo-sexto.color-acento-contenido.mb-4(data-aos="flip-up")
              h5 Figura 4.
              span Iconos de herramientas en la Ventana #[em Board] 
            figure.mb-5
              img(src="@/assets/curso/figuras/4.png", data-aos="zoom-in", alt="Ilustra los iconos y herramientas principales disponibles en la ventana Board, cada uno con su respectiva función. ").mx-auto


    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Herramientas básicas y más utilizadas 

    p(data-aos="fade-right").mb-5 Este apartado describe las herramientas esenciales de la ventana Board para el diseño de circuitos impresos. Cada herramienta facilita la organización, edición y conexión de componentes, optimizando el proceso de diseño y asegurando precisión en cada etapa. 


    .bg-full-width.bg-fondo-5
      .p-4.p-md-5 
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo="b").px-4.pb-4

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 Layer 
                p.mb-0 En el cuadro de diálogo se puede seleccionar o editar la capa que identifica los márgenes, las pistas, los alambres, los nombres y la identificación de cada componente. 
              .c4l-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema1/slider-1.png', alt='La imagen presenta  la lista de capas disponibles y visibilidad en la ventana Board, permitiendo al usuario seleccionar y gestionar capas específicas para el diseño. ')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 Text 
                p.mb-0 Abre una ventana de edición de texto para agregar etiquetas o notas a los componentes. Una vez escrito el texto, se debe presionar Enter para incorporarlo al diseño. Es importante verificar que el texto se agregue en la capa tPlace, ya que podría aparecer en una capa incorrecta. 
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema1/slider-2.png', alt='La imagen presenta el  menú desplegable para seleccionar la capa activa en la ventana Board, facilitando el trabajo en diferentes capas del diseño. ')


            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 Show  
                p.mb-0 Al hacer clic en un pin, se resalta su conexión para facilitar la identificación de la red a la que pertenece.  
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema1/slider-3.png', alt='La imagen presenta  la visualización de componentes conectados y rutas de conexión resaltadas en la ventana Board.  ')


            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 Auto   
                p.mb-0 Ajusta automáticamente las pistas en cada componente. 
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema1/slider-4.png', alt='La imagen presenta  un ejemplo de diseño de conexiones entre componentes en la ventana Board, mostrando el flujo de las rutas en azul. ')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 Route    
                p.mb-0 Permite enrutar manualmente las pistas que no se han ajustado automáticamente. 
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema1/slider-5.png', alt=' La imagen presenta  el enfoque en una conexión específica entre componentes, ilustrando el detalle en las rutas y nodos de conexión. ')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
