<script>
	export let background, title;
</script>

<template lang="pug">
  .container.overlay
    img(src="/{`images/${background}.png`}")
    h1.center_z {title}
</template>

<style lang="sass">
  @import '../../styles/variables'

  .container
    &:after
      z-index: 1
    h1
      text-transform: uppercase
      letter-spacing: 0.5ch
</style>
