<script>
  export let content;
</script>

<template lang="pug">
  h1.faded_out(style="--delay: 0.5") {content}
</template>

<style lang="sass">
  h1
    text-transform: uppercase
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    /*  font-family: 'Porter-BoldDEMO'  */
    line-height: 2.5
    margin: 0 auto
    font-family: "Porter Bold DEMO", sans
    max-width: 12ch
    @media (min-width: 601px)
      max-width: 100%

    /*  margin-top: 4rem  */
    @media (min-width: 601px)
      margin-top: 0

</style>
