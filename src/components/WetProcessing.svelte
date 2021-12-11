<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";
  import Article from "./sub_components/Article.svelte";

  const header = {
    title: "washing, more than a passion!",
    paragraph: "Mostafiz Uddin has a huge archive of wash samples, which he collects for his daily washing work and for his clients. From basic washes, latest laser technology treatments to extremely sophisticated used washes, over thousand samples can be found in his important archives. Through this, he aims to highlight the incredible denim know-how achieved in Bangladesh."
  };

</script>

<template lang="pug">
  #wet_processing
    Title(content="wet processing")
    Background(image="wet_processing_header")
      HeaderGrid({...header})

    Background(image="wet_processing_background")

      Article
        div(slot="first")
          h3.moved_down(style="--delay: 0.75") Being a very passionate person about washing, Mostafiz Uddin can be found in the laundry on a regular base.
          p.moved_up(style="--delay: 1") He likes to develop and make the washing recipes on his own ! Scrapings, destroy, whiskers, resin, tints, repairs… he knows it all and has a great expertise with all latest techniques. Sustainability is key to his wash-developments thanks to eco-friendly dye-stuff, less water-consumption and implementation of laser usage wherever possible
        div(slot="last")
          img.faded_out(src="/images/optimized/wet_processing_1.webp" style="--delay: 0.5")

      Article
        div(slot="first")
          img.faded_out(src="/images/optimized/wet_processing_2.jpg" style="--delay: 0.5")
          p.faded_out(style="--delay: 0.75") Due to these special developments, which are all created and made by Mostafiz, the visitor and client can notice how trend-relevant, fashionable, sustainable and sophisticated Denim washes can be in Bangladesh.

        div(slot="last")
          h3.faded_out(style="--delay: 1") The Wash archives are updated and refreshed every season.
          p.faded_out(style="--delay: 1.25") Visitors who work with the archives can always take advantage of the latest seasonal trend-developments. Specific washes can also be developed depending on the specific demands of the clients.
          img.faded_out(src="/images/optimized/wet_processing_3.jpg" style="--delay: 1.5")

      Article
        div.moved_right(slot="first" style="--delay: 0.5")
          img(src="/images/optimized/wet_processing_4.webp")
        div.moved_left(slot="last" style="--delay: 0.5")
          h3 This wash innovation is an important added value to each client.
          p In the end, it’s Mostafiz hobby, to create novelty washes, which provides the unique value to the denim products developed and presented in his factory.

      Article
        div.moved_right(slot="first" style="--delay: 0.5")
          h3 Creating washes is a continuous process for Mostafiz Uddin.
          p He constantly travels to see and understand what is going on in this world, as much in terms of product in the stores, and also when seeing denim at international fashion shows and fashion fairs. All he sees and notes, is of inspiration for his next developments.
        div.moved_left(slot="last" style="--delay: 0.5")
          img(src="/images/optimized/wet_processing_5.jpg")
          h3 USA-2012

</template>

<style lang="sass">
  #wet_processing
    :global
      article:nth-of-type(1):before
        @media (min-width: 601px)
          inset: 3rem 25% 0 0 !important
      article:nth-of-type(2):before
        @media (min-width: 601px)
          inset: 3rem 0 15% 0 !important
      article:nth-of-type(3):before
        @media (min-width: 601px)
          inset: 3rem 0 0 25% !important
      article:nth-of-type(4):before
        @media (min-width: 601px)
          inset: 3rem 0 0 0 !important
</style>
