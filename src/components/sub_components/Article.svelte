<template lang="pug">
  article
    slot(name="first")
    slot(name="last")
</template>

<style lang="sass">
  @import '../../styles/variables'
  @import '../../styles/mixins'

  article
    padding: 0 2.5em 2.5em 2.5em
    position: relative
    z-index: 1

    display: grid
    grid-gap: 2.5em

    @media (min-width: 601px)
      grid-gap: 5em
      grid-template-columns: 1fr 1fr

    &:before
      content: ''
      z-index: -1
      position: absolute
      inset: 0 0 5rem 0
      @media (min-width: 601px)
        inset: 3rem 25% 25% 0


      background: $blue

    &:nth-of-type(2):before
      inset: 3rem 0 5rem 0
    &:nth-of-type(3):before
      inset: 3rem 0 0 0
      @media (min-width: 601px)
        inset: 3rem 0 0 25%


    :global
      h3
        @media (min-width: 601px)
          text-align: end
        @include underline
        /*  font-size: clamp(25px, 2vw, 2vw) !important  */
        font-size: max(25px, 2vw) !important
      p
        text-align: end
        /*  font-size: clamp(18px, 1.5vw, 1.5vw)  */
        font-size: max(18px, 1.5vw)
        padding-bottom: 10%

      & > *
        * + *
          margin-top: 2.5em
        img + h3
          margin: 0
          &:after
            height: 0

      & > *:first-child
        h3
          /*  @media (min-width: 601px)  */
          /*  margin-left: 2.5rem  */

        /*  img + p  */
        /*  @include underline  */

      & > *:nth-child(2)
        img:first-child
          @media (min-width: 601px)
            margin-top: 7.5rem


</style>
