<template lang="pug">
  #preloader
    img(src="/images/logo.png")
</template>

<style lang="sass">
  #preloader
    width: 100vw
    height: 100vh
    position: fixed
    z-index: 999
    background: white
    opacity: 1
    transition: opacity 1.5s
    display: grid
    place-items: center

    img
      width: 25vw
      @media (min-width: 601px)
        width: 10vw

      animation: rotate 2.5s linear infinite
      @keyframes #{rotate}
        0%
          transform: roate(0)
        100%
          transform: rotate(360deg)

</style>
