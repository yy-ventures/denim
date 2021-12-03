<template lang="pug">
  nav
    input#toggler(type="checkbox")
    label(for="toggler" )#menu_toggler_label
      #menu_button
        #bar

    a(href="/")
      img.faded_out(src="/images/logo.png" style="--delay: 1")
      h3.moved_left(style="--delay: 0.5") THE DENIM EXPERT
    .menu
      a.moved_left(href="/expertise")
        p.moved_down(style="--delay: 1") EXPERTISE
      a.active_link(href="/sustainability")
        p.moved_down(style="--delay: 1.25") SUSTAINABILITY
      a(href="/news")
        p.moved_down(style="--delay: 1.5") NEWS
      a(href="/about")
        p.moved_down(style="--delay: 1.75") ABOUT
      a(href="/contact")
        p.moved_down(style="--delay: 2") CONTACT
      .socials.moved_right(style="--delay: 2.25")
          a(class="fab fa-instagram" href="#" target="_blank" rel="noopener noreferrer")
          a(class="fab fa-linkedin-in" href="#" target="_blank" rel="noopener noreferrer")
          a(class="fab fa-facebook-f" href="#" target="_blank" rel="noopener noreferrer")
          a(class="fab fa-twitter" href="#" target="_blank" rel="noopener noreferrer")
</template>

<style lang="sass">
  @import '../../styles/variables'

  nav
    transition: transform 500ms ease-in-out

    a
      transition: color .5s
      &:last-child
        transition: background .5s
    // background: rgba($bg_light, 0.95)
    background: white
    // background: $bg_light
    // box-shadow: 0 0 0.5em 0 grey
    a,
    a p
      color: grey
      &:hover,
      &:active
        color: black
        // color: black !important

    a
      font-weight: 600
    
    input
      display: none

    display: flex
    justify-content: space-between
    align-items: center

    position: fixed
    width: 100%
    @media (min-width: 601px)
      position: sticky
      

    top: 0
    z-index: 99

    padding: 0.5em 2.5em

    flex-direction: column
    @media (min-width: 601px)
      flex-direction: row

    @media (max-width: 600px)
      min-height: 4rem

    img
      width: 7rem
      position: absolute
      top: 0
      left: 50%
      transform: translate(-50%, -25%)

      @media (min-width: 601px)
        width: 7em
        left: 0
        transform: translate(25%, -25%)

      // width: 25%
      // margin: auto
      // @media (min-width: 601px)
      //   width: 35%
      //   margin: 0
        
    h3
      font-family: "Porter Bold DEMO", sans
      color: $fg_dark_title
      margin-left: 5em
      font-size: 1.75vw !important
      /*  font-size: 1.5rem !important  */
      display: none
      letter-spacing: 0.5rem
      @media (min-width: 601px)
        display: block
        

    .menu
      overflow: hidden
      transition: max-height 500ms
      text-align: center

      max-height: 0
      @media (min-width: 601px)
        max-height: 100%

      @media (min-width: 601px)
        display: flex

      * + *
        @media (min-width: 601px)
          margin-left: 1.5em

      a p
        /*  font-size: clamp(12px, 1vw, 1vw) !important  */
        font-size: max(12px, 1vw) !important
        font-family: "Porter Bold DEMO", sans
        /*  font-family: 'Porter-BoldDEMO'  */

      a
        margin-top: 1em
        @media (min-width: 601px)
          margin-top: 0
        &:first-child
          margin-top: 7em
          @media (min-width: 601px)
            margin-top: 0

      .socials
        a
          /*  font-size: clamp(18px, 1vw, 1vw) !important  */
          font-size: max(18px, 1vw) !important
          /*  line-height: 1.6  */
        a + a
          margin-left: 0.75em

    #toggler:checked
      ~ .menu
        // display: block
        max-height: 600px
      ~ label #menu_button #bar
        background: none
        margin-top: 7px
        &:before,
        &:after
          top: 0
        &:before
          transform: rotate(45deg)
        &:after
          transform: rotate(-45deg)


    #menu_toggler_label
      @media (min-width: 601px)
        display: none
      #menu_button
        position: absolute

        top: 10px
        right: 10px

        z-index: 99
        cursor: pointer

        padding: 5px 10px
        padding-bottom: 20px

        @media (min-width: 601px)
          display: none

        #bar
          position: relative
          transition: background 500ms
          &, &:after, &:before
            width: 30px
            height: 3px
            background: #333
            border-radius: 50px
          &:after, &:before
            content: ""
            display: block
            position: absolute
            transition: transform 500ms
          &:before
            top: 7px
          &:after
            top: 15px

</style>
