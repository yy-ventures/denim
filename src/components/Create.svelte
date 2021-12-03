<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";

  import PostHeader from "./sub_components/CreatePostHeader.svelte";
  import Featured from "./sub_components/CreateFeatured.svelte";
</script>

<template lang="pug">
  #create
    Background(image="create_header")
      Title(content="create")
    PostHeader
    Featured
</template>

<style lang="sass">
  @import '../styles/variables'

  #create
    :global
      > .container:first-of-type
        &:after
          background: none
        .content
          height: 50vh
          @media (min-width: 601px)
            height: 90vh
          h1
            height: 100%
</style>
