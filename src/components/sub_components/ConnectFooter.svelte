<template lang="pug">
  .container
    img(src="/images/optimized/connect_footer.jpg")
    .stats.grid.four
      .stat.moved_left(style="delay: 0.5")
        h1 11
        h3 editions
      .stat.moved_down(style="delay: 1")
        h1 50k
        h3 visitors
      .stat.moved_up(style="delay: 1.5")
        h1 206
        h3 exhibitors
      .stat.moved_right(style="delay: 2")
        h1 160
        h3 hours of workshop
</template>

<style lang="sass">
  @import '../../styles/variables'
  .container
    position: relative
    overflow: hidden

    .grid
      grid-gap: 5em

    img
      height: 100vh
      width: 100%
      object-fit: cover

    .stats
      padding: 2.5em 1em
      position: absolute
      background: $blue
      /*  margin: 0 auto  */

      @media (max-width: 600px)
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      @media (min-width: 601px)
        width: 90%
        left: 50%
        transform: translateX(-50%)
        bottom: 10%

      h3,
      h1
        line-height: 1
        margin: 0
        text-align: center
        text-transform: uppercase

</style>
