<script>
  import Background from "./Background.svelte";
</script>

<template lang="pug">
  #create_featured
    Background(image="news_background")
      .grid.two
        img.faded_out(src="/images/optimized/create_1.jpg" style="--delay: 0.5")
        img.faded_out(src="/images/optimized/create_2.webp" style="--delay: 0.75")
      .grid.three
        a.center.moved_left(href="/expertise/create/denim-studio" style="--delay: 0.75")
          h3 denim
          h3 studio
        a.faded_out.center(href="/expertise/create/design-concepts" style="--delay: 0.5")
          h3 design
          h3 concepts
        a.moved_right.center(href="/expertise/create/fabric-innovation" style="--delay: 1").center
          h3 fabric
          h3 innovation
        a.moved_left.center(href="/expertise/create/fabric-sourcing" style="--delay: 0.75")
          h3 fabric
          h3 sourcing
        a.faded_out.center(href="/expertise/create/training-n-development" style="--delay: 0.5")
          h3 training
          h3 and
          h3 development
        a.moved_right.center(href="/expertise/create/wet-processing" style="--delay: 1")
          h3 wet
          h3 processing
</template>

<style lang="sass">
  @import '../../styles/variables'
  #create_featured
    .grid:first-of-type
      img
        width: 100%
        height: 50vh
        object-fit: cover

    .grid:nth-of-type(2)
      a
        background: rgba(black, .25)
        text-align: center
        padding: 5em 0


        h3
          text-transform: uppercase
          font-family: "Porter Bold DEMO", sans

        &:hover
          background: rgba(black, .5)
          h3
            color: $blue

</style>
