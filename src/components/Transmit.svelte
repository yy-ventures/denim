<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
</script>

<template lang="pug">
  #transmit
    Background(image="transmit_header")
      Title(content="transmit")
    Title(content="bangladesh denim times")
    Background(image="transmit_post_header")
      p.faded_out(style="--delay: 0.5") Bangladesh Denim Times is one of Mostafiz Uddin's denim-dreams that come true. Whether it is through its printed version, on Instagram or Facebook, he shares everything denim. He believes that talking about denim all day, dreaming about denim all night, thinking and breathing denim. When he is not in the factory, he is at trade fairs in Holland, or meeting designers in France… . So, it was natural to gather all those precious encounters in one. The Bangladesh Denim Times is the embodiment of that ‘one’. It covers inter alia denim trends, technology, innovation, market watch, sustainability, circularity and what not related to denim! 

    Background(image="transmit_footer")
      .grid.three
        .grid_container.moved_right(style="--delay: 0.5")
          a(href="https://wetransfer.com/downloads/bd8b332a7290e4dca9e259bb9a8659d320211130112108/1bc414e017d8da245174d2d4d914c52c20211130112136/b0b8bf" target="_blank")
            img(src="/images/optimized/transmit_1.jpg")
          h3 print
        .grid_container.moved_right(style="--delay: 0.75")
          a(href="http://www.bangladeshdenimtimes.com" target="_blank")
            img(src="/images/optimized/transmit_2.jpg")
          h3 website
        .grid_container.moved_right(style="--delay: 1")
          a(href="https://www.facebook.com/bangladeshdenimtimes" target="_blank")
            img(src="/images/optimized/transmit_3.jpg")
          h3 facebook

</template>

<style lang="sass">
  @import '../styles/variables'

  #transmit
    :global
      > .container:first-of-type .content
        height: 50vh
        @media (min-width: 601px)
          height: 90vh
        h1
          height: 100%
      > .container:nth-of-type(2) .content
        p
          /*  font-size: clamp(16px, 1.5vw, 1.5vw) !important  */
          font-size: max(16px, 1.5vw) !important
          @media (min-width: 601px)
            width: 80%
          margin: 0 auto
          text-align: center
      
      .grid
        img
          width: 100%
          height: 50vh
          object-fit: cover
        h3
          /*  font-family: 'Porter-BoldDEMO'  */
          margin-top: 1em
          text-align: center
          text-transform: uppercase

</style>
