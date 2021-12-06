<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";
  import Article from "./sub_components/Article.svelte";

  const header = {
    title: "trend & design",
    paragraph: "As a true denim lover, Mostafiz Uddin has a passion for denim design & trend. Traveling the world, working with the most important international retailers, he knows where to find trends and how to analyze them for any denim lover and any denim professional."
  };

</script>

<template lang="pug">
  #design_concepts
    Title(content="design concepts")
    Background(image="design_concepts_header")
      HeaderGrid({...header})

    Background(image="design_concepts_background")

      Article
        div(slot="first")
          h3.moved_down(style="--delay: 0.75") These trends are then transformed into sharp product design, which Mostafiz likes to do himself. 
          p.moved_up(style="--delay: 1") These trend reports & denim designs are made with attention to detail, and relevant for targeted international countries by taking inspiration around the world.
        div(slot="last")
          img.faded_out(src="/images/optimized/design_concepts_1.jpg" style="--delay: 0.5")

      Article
        div(slot="first")
          img.faded_out(src="/images/optimized/design_concepts_2.jpg" style="--delay: 0.5")
          p.faded_out(style="--delay: 0.75") When needed, special designs can be made matching to the market demands of his customers. These specific designs include all technical information, like fit, specs, trimmings, fabric, wash, and do include full technical files.
        div(slot="last")
          h3.faded_out(style="--delay: 1") Once finished, these special designs and the trend-analysis, are made available to all customers.
          p.faded_out(style="--delay: 1.25") Mostafiz personally ensures great market and trend-relevance in his products, thanks to these designs. These special designs are made available to customers without any extra-cost.
          img.faded_out(src="/images/optimized/design_concepts_3.jpg" style="--delay: 1.5")

      Article
        div.moved_right(slot="first" style="--delay: 0.5") 
          img(src="/images/optimized/design_concepts_4.jpg")
        div.moved_left(slot="last" style="--delay: 0.5")
          h3 Design and trend being a real passion for Mostafiz,
          p He spends a large amount of time working on these, and benchmarking around the world. Continuously developing new product is his main occupation. He personnaly follows up the entire make, fittings & wash of each novelty.

</template>

<style lang="sass">
  #design_concepts
    :global
      article:nth-of-type(1):before
        inset: 3rem 0 15% 0 !important
</style>
