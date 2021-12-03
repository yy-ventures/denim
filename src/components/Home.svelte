<script>
  import HomeHeader from "./sub_components/HomeHeader.svelte";
</script>

<template lang="pug">
  #home
    HomeHeader

    section#expertise
      .grid.four
        a.moved_right(href="/expertise/create" style="--delay: 0.5")
          .img_cont: img(src="/images/optimized/create.jpg" style="--delay: 1.5")
          h3 CREATE
        a.moved_right(href="/expertise/connect" style="--delay: 0.75")
          .img_cont: img(src="/images/optimized/connect.jpg")
          h3 CONNECT
        a.moved_right(href="/expertise/educate" style="--delay: 1")
          .img_cont: img(src="/images/optimized/educate.jpg")
          h3 EDUCATE
        a.moved_right(href="/expertise/transmit" style="--delay: 1.25")
          .img_cont: img(src="/images/optimized/transmit.jpg")
          h3 TRANSMIT

      article.faded_out(style="--delay: 1.5")
        p My endless passion for denim has pushed me to develop several channels which are feeding one each other.
        p Production know-how, Technology savvy mindset doubled with ethical development vision, market intelligence and idustry network !
        p Mostafiz Uddin

      img.background(src="/images/optimized/home_background.jpg")   

</template>

<style lang="sass">
  #home
    section
      position: relative
      padding-bottom: 2.5em

      .background
        position: absolute
        top: 0
        z-index: -1
        height: 100%
        width: 100%
        object-fit: cover

      .grid
        padding: 2.5rem
        grid-gap: 1em

        img
          width: 100%
          height: 40vh
          object-fit: cover

        h3
          text-align: center
          font-family: "Porter Bold DEMO", sans
          /*  font-size: 2em  */
          /*  font-family: 'Porter-BoldDEMO'  */

      article
        background: rgba(lightgrey, .15)
        width: 95%
        @media (min-width: 601px)
          width: 75%
          
        margin: 0 auto
        padding: 1em
        @media (min-width: 601px)
          padding: 2.5em
          
        text-align: center

        p
          font-family: Lora
          letter-spacing: 0.20rem
          /*  font-size: 1.25rem  */
          /*  font-size: clamp(16px, 1.5vw, 1.5vw) !important  */
          font-size: max(16px, 1.5vw) !important
          text-align: center !important

        p + p
          margin: 0

        p:last-of-type
          font-family: Arimo
          margin-top: 2.5em

</style>
