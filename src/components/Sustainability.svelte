<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import Article from "./sub_components/Article.svelte";
</script>

<template lang="pug">
  #sustainability
    Title(content="sustainability")

    Background(image="sustainability_header")
      h2.moved_down(style="--delay: 1") Today, sustainability, and managerial responsibility, have become the driving keywords for Mostafiz Uddin

    Background(image="sustainability_background")

      Article
        div.moved_left(slot="first" style="--delay: 0.5")
          h3 His factory copes with the higher standards of sustainability
          p From security to water treatment, his factory is a state of the art Building, where plants grow, and fishes live in the water which is leaving the factory.
        div.moved_right(slot="last" style="--delay: 0.5")
          img(src="/images/optimized/sustainability_1.webp")

      Article
        div(slot="first")
          img.faded_out(src="/images/optimized/sustainability_2.webp" style="--delay: 0.5")
          p.faded_out(style="--delay: 0.75") His factory has been recognized as 'New Champion' by the World Economic Forum (WEF) for its extraordinary performance in sustainability and inclusivity.
        div(slot="last")
          h3.faded_out(style="--delay: 1") Special care is given to all workers and managers
          p.faded_out(style="--delay: 1.25") and numerous projects and initiatives create that special mood, where the entire team feels the collective responsibility Mostafiz is protecting his team with
          img.faded_out(style="--delay: 1.5")(src="/images/optimized/sustainability_3.jpg")

      Article
        div.moved_left(slot="first" style="--delay: 0.5")
          img(src="/images/optimized/sustainability_4.webp")
        div.moved_right(slot="last" style="--delay: 0.5")
          h3 Mostafiz Uddin works personally on all latest denim developments
          p which are based on recycled material and cradle-to-cradle projects. These developments can be of great benefit for his clients
</template>

<style lang="sass">
  @import '../styles/mixins'

  #sustainability
    :global
      h2:first-of-type
        padding: 1em 0
        @include underline
        &:after
          left: 0
          width: 15%
          height: 0.10em


      article:nth-of-type(1):before
        @media (min-width: 601px)
          inset: 3rem 25% 25% 0 !important
      article:nth-of-type(2):before
        @media (min-width: 601px)
          inset: 3rem 0 0 0 !important
</style>
