<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";
  import Article from "./sub_components/Article.svelte";

  const header = {
    title: "",
    paragraph:
      "Being a very pragmatic person, Mostafiz knows exactly how to manufacture  denims at all industrial levels, from prototype to the final product in the stores."
  };

</script>

<template lang="pug">
  #training_n_development
    Title(content="training & development")
    Background(image="training_n_development_header")
      HeaderGrid({...header})

    Background(image="training_n_development_background")

      Article
        div(slot="first")
          h3.moved_down(style="--delay: 0.75") In his factory, Mostafiz has always an eye on products. 
          p.moved_up(style="--delay: 1") He can be seen in the sewing stations, washing unit and in the finishing area. Always with helpful advice, sharing his technical know-how with his workers. His point is always to train and uplift the technical know-how of his team.
        div(slot="last")
          img.faded_out(src="/images/optimized/training_n_development_1.jpg" style="--delay: 0.5")

      Article
        div.moved_left(slot="first" style="--delay: 0.5")
          img(src="/images/optimized/training_n_development_2.jpg")
        div.moved_right(slot="last" style="--delay: 0.5")
          h3 Product samples are the face of the factory. 
          p Product samples are the face of the factory. This is a major point Mostafiz teaches his team. If the first sample made for a customer is great, chances are the order will be placed with the factory. This philosophy is taught and trained by Mostafiz for all members of his team.

      Article
        div.moved_right(slot="first" style="--delay: 0.5")
          h3 At any moment, Mostafiz tries to identify eventual product problems.
          p When doing this, Mostafiz Uddin always focuses on pragmatic solutions, rather than commanding out of his office.
        div.moved_left(slot="last" style="--delay: 0.5")
          img(src="/images/optimized/training_n_development_3.jpg")
</template>

<style lang="sass">
  #training_n_development
    :global
      article:nth-of-type(1):before
        @media (min-width: 601px)
          inset: 3rem 25% 15% 0 !important
      article:nth-of-type(2):before
        inset: 3rem 0 0 0 !important
        @media (min-width: 601px)
          inset: 5rem 0 0 0 !important
      article:nth-of-type(3):before
        inset: 0 0 5rem 0 !important
        @media (min-width: 601px)
          inset: 3rem 25% 25% 0 !important
      
      h1:first-of-type:after
        height: 0 !important
</style>
