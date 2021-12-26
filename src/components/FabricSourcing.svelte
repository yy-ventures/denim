<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";
  import Article from "./sub_components/Article.svelte";

  const header = {
    title: "sourcing the core of the product",
    paragraph:
      "Fabric is the heart, the soul and the strength of each pair of jeans. Sourcing the right fabric is a real passion for Mostafiz. To him, sourcing the right fabric goes way beyond simply selecting and buying.",
  };

</script>

<template lang="pug">
  #fabric_sourcing
    Title(content="fabric sourcing")
    Background(image="fabric_sourcing_header")
      HeaderGrid({...header})

    Background(image="fabric_sourcing_background")

      Article
        div(slot="first")
          h3.moved_down(style="--delay: 1") Many fabric mills are invited to meet Mostafiz at his factory 
          p.moved_up(style="--delay: 1.25") They travel to Chittagong and present their latest fabric developments. Exchanging views about developments, developing fabrics, and sourcing the right product at the right price are true everyday business here.
        div(slot="last")
          img.faded_out(src="/images/optimized/fabric_sourcing_1.webp" style="--delay: 0.5")
          h3.faded_out(style="--delay: 0.75") Bangladesh-2019

      Article
        div(slot="first")
          img.faded_out(src="/images/optimized/fabric_sourcing_2.jpg" style="--delay: 0.5")
          h3.faded_out(style="--delay: 0.75") China-2002
          p.faded_out(style="--delay: 1") Price being a key element to successful fabric development, and  even more to successful fabric sourcing, it is important to understand the  mechanics of coton, fiber, dyeing and weaving. Mostafiz knows exactly what to find where, and can be seen in many places around the globe.

        div(slot="last")
          h3.faded_out(style="--delay: 1.25") Well known for his expertise in fabric-trends, many mills are welcoming the design input of Mostafiz
          p.faded_out(style="--delay: 1.5") Numerous denim fabrics have been developed thanks to his input. Some mills even build their range-structure based on the technical input and advice given by him.
          img.faded_out(src="/images/optimized/fabric_sourcing_3.jpg" style="--delay: 1.75")
          h3.faded_out(style="--delay: 2") USA-2015

      Article
        div.moved_right(slot="first" style="--delay: 0.5")
          img(src="/images/optimized/fabric_sourcing_4.jpg")
          h3 Germany-2016
        div.moved_left(slot="last" style="--delay: 0.5")
          h3 Fabric fairs are another great source of inspiration
          p Most have met Mostafiz at Kingpins Amsterdam, New York, Hong-Kong, at Bluezone Munich, Denim PV in London or Milano,at Première Vision and Texworld in Paris. Or best, at Mostafiz very own fair, the Bangladesh Denim Expo in Dhaka. These are the places where all experts meet.

</template>

<style lang="sass">
  #fabric_sourcing
    :global
      article:nth-of-type(1):before
        inset: 0
        @media (min-width: 601px)
          inset: 3rem 25% 25% 0 !important
      article:nth-of-type(2):before
        inset: 0
        @media (min-width: 601px)
          inset: 3rem 0 0 0 !important
      article:nth-of-type(3):before
        @media (min-width: 601px)
          inset: 3rem 0 0 25% !important
</style>
