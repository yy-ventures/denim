<script>
  import Background from "./Background.svelte";
</script>

<template lang="pug">
  #home_header
    img(src="/images/optimized/home_header_1.jpg")
    Background(image="home_header_2")
      .content
        p.faded_out(style="--delay: 1") Denim is my true passion. From the early days in the industry, till today, I do emphasize on bringing my part to denim at all levels. I boldly invest time into denim-fabric, design, development and washing, enabling my team and clients to take advantage of this. Let me take you through a presentation of my denim universe.
        h3.moved_down(style="--delay: 2") MOSTAFIZ UDDIN
</template>

<style lang="sass">
  @import '../../styles/mixins'
  @import '../../styles/variables'

  #home_header
    display: grid
    overflow: hidden
    grid-template-rows: 90vh

    @media (min-width: 601px)
      grid-template-columns: 1fr 2fr


    :global
      .container
        &:after
          background: rgba($blue, 0.25)
        .content
          height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center

          p
            font-family: Lora
            letter-spacing: 0.20rem
            /*  font-size: clamp(16px, 1.5vw, 1.5vw) !important  */
            font-size: max(16px, 1.5vw) !important
            font-weight: bold

          h3
            align-self: start
            margin-top: 1em
            @include underline
            &:after
              margin: 0
              height: 0.20em
              margin-top: 0.5em
              width: 50%

</style>
