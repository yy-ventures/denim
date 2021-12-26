<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";
  import Article from "./sub_components/Article.svelte";

  const header = {
    title: "fabric innovation & development",
    paragraph:
      "Working with all main denim mills around the world, Mostafiz has a in depth knowledge of fabrics. Attending all main fabric fairs and being a special guest at many mills, he sees the market, and understands the evolution in fabrics."
  };

</script>

<template lang="pug">
  #fabric_innovation
    Title(content="fabric innovation")
    Background(image="fabric_innovation_header")
      HeaderGrid({...header})

    Background(image="fabric_innovation_background")

      Article
        div(slot="first" )
          h3.moved_down(style="--delay: 1") Mostafiz believes that this know-how is important for the Bangladesh denim industry 
          p.moved_up(style="--delay: 1.25") He therefore spends a large amount of time sharing his fabric know-how with denim fabric manufacturers.
        div(slot="last")
          img.faded_out(src="/images/optimized/fabric_innovation_1.webp" style="--delay: 0.5")
          h3.faded_out(style="--delay: 0.75") Japan-2001


      Article
        div.moved_left(slot="first" style="--delay: 0.5")
          img(src="/images/optimized/fabric_innovation_2.webp")
          h3 China-2002
        div.moved_right(slot="last" style="--delay: 0.5")
          h3 The training and innovation part is very important here
          p Mostafiz provides fabric trend-direction to mills, and works on new fabric concepts with the engineers.

      Article
        div.moved_right(slot="first" style="--delay: 0.5")
          h3 Developing fabrics for specific markets with adapted price-levels is key to all 
          p There is no successful development without precise commercial targets. With his skills, Mostafiz provides precise direction.
        div.moved_left(slot="last" style="--delay: 0.5")
          img(src="/images/optimized/fabric_innovation_3.webp")
          h3 Bangladesh-2014

</template>

<style lang="sass">
  #fabric_innovation
    :global
      article:nth-of-type(1):before
        inset: 0
        @media (min-width: 601px)
          inset: 3rem 0 25% 0 !important
      article:nth-of-type(2):before
        inset: 5rem 0 0 0
        @media (min-width: 601px)
          inset: 3rem 0 0 25% !important
      article:nth-of-type(3):before
        inset: 0
        @media (min-width: 601px)
          inset: 3rem 25% 25% 0 !important
</style>
