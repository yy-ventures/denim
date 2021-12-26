<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
</script>

<template lang="pug">
  Background(image="contact")
    .container
      Title(content="contact")
      h5.faded_out(style="--delay: 1.5") mostafiz@denimexpert.com
      //- h5.faded_out(style="--delay: 2") www.denimmostafiz.com
</template>

<style lang="sass">
  .container
    height: 60vh
    
    h5
      text-align: center
      color: white
      font-family: Lora
      font-size: 1.5rem
      line-height: 0
      letter-spacing: 0.25rem
</style>
