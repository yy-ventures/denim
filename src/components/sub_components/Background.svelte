<script>
  export let image;
</script>

<template lang="pug">
  .container
    img.background(src="/images/optimized/{image}.jpg")
    .content
      slot
</template>

<style lang="sass">

  @import '../../styles/variables'

  .container
    overflow-x: hidden
    position: relative
    z-index: 1
    &:after
      content: ''
      position: absolute
      inset: 0
      z-index: -1
      background: rgba($blue, 0.5)

    .background
      position: absolute
      top: 0
      z-index: -1
      height: 100%
      width: 100%
      object-fit: cover

    .content
      padding: 10vw
      /*  padding: 5em  */
      /*  padding: calc(2.5vw + 2.5rem)  */

      :global
        & > * + *
          margin-top: 5em

</style>
