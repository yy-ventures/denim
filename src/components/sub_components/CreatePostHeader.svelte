<script>
  import Background from "./Background.svelte";
</script>

<template lang="pug">
  #create_post_header
    Background(image="create_post_header")
      .texts.faded_out(style="--delay: 0.5")
        h5 I have created Denim Expert Limited a place where denim lovers meet, work on products, washes and build the best jeans imaginable. We have the know-how, the technology, the expertise, and skilled personnel, necessary to provide a one-stop service for our customers' needs. We ensure that the people who make our products, work in a safe environment and treated with dignity and respect and we hope to set a benchmark for others to follow within the industry!
        h5 Mostafiz Uddin
        h5 Managing Director
        h5 Denim Expert Limited
</template>

<style lang="sass">
  @import '../../styles/variables'

  #create_post_header
    :global
      .container
        &:after
          background: none
        
        .texts
          background: rgba($blue, .5)
          padding: 5vw
          h5
            font-family: Lora
            /*  font-size: clamp(16px, 1.5vw, 1.5vw) !important  */
            font-size: max(16px, 1.5vw) !important
            text-align: center
            
            &:not(:first-child)
              font-family: Arimo
              line-height: 0
</style>
