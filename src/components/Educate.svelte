<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
</script>

<template lang="pug">
  #educate
    Background(image="educate_header")
      Title.title(content="educate")
    Background(image="educate_post_header")
      p.faded_out(style="--delay: 0.5") Bangladesh Denim Academy is an educational platform established by Mostafiz Uddin to guide & educate denim industry professionals. The program consists of workshops, masterclasses & seminars. Specifically made for professionals working in factories or in the field of denim, the aim of the academy is to uplift the knowledge of the local professionals.
    Background(image="about_background")
      .grid.two
        img.moved_left(src="/images/optimized/design_concepts_1.webp" style="--delay: 0.5")
        img.moved_right(src="/images/optimized/educate_2.jpg" style="--delay: 0.75")
        img.moved_left(src="/images/optimized/educate.webp" style="--delay: 0.5")
        img.moved_right(src="/images/optimized/educate_4.jpg" style="--delay: 0.75")
</template>

<style lang="sass">
  @import '../styles/variables'

  #educate
    :global
      > .container:first-of-type .content
        height: 50vh
        @media (min-width: 601px)
          height: 90vh

        h1
          height: 100%
      > .container:nth-of-type(2)
        &:after
          background: none
        p
          padding: 5vw
          background: rgba($blue, 0.75)
          /*  font-size: clamp(18px, 1.5vw, 1.5vw)  */
          font-size: max(18px, 1.5vw)

      .grid
        img
          width: 100%
          height: 60vh
          object-fit: cover

</style>
