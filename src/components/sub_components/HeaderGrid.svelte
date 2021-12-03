<script>
  export let title, paragraph;
</script>

<template lang="pug">
  .container
    h1.moved_down(style="--delay: 0.5") {title}
    p.moved_up(style="--delay: 0.75") {paragraph}
</template>

<style lang="sass">
  @import '../../styles/mixins'

  .container
    /*  overflow: hidden  */

    /*  height: 75vh  */
    /*  @media (min-width: 601px)  */
    /*  height: 50vh  */

    display: grid
    grid-gap: 1em
    @media (min-width: 601px)
      grid-template-columns: 1fr 1fr

    h1
      text-transform: uppercase
      @include underline
      &:after
        margin: 0
        width: 50%
        height: 0.10em

    p
      align-self: center
      @media (min-width: 601px)
        margin-top: 5em

      /*  font-size: clamp(16px, 1.25vw, 1.25vw) !important  */
      font-size: max(16px, 1.25vw) !important

</style>
