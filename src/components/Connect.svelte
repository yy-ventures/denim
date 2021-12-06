<script>
  import Hero from "./sub_components/Hero.svelte";
  import Footer from "./sub_components/ConnectFooter.svelte";

  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";

  const data_hero = {
    background: "connect_header",
    title: "connect",
  };

  const header = {
    title: "bangladesh denim expo",
    paragraph:
      "Mostafiz Uddin founded one of the largest denim fairs where international denim professionals meet. The Expo’s objective is to showcase Bangladesh’s growth potential in the denim industry. At the fair, Bangladesh’s exhibitors stand shoulder to shoulder with firms from Italy, Turkey, Japan, Pakistan and India, among others. Bangladesh Denim expo is the place where Mostafiz acts like the pioneer of change, setting a new scene for how international buyers and brands see Bangladesh’s denim industry in the future.",
  };
</script>

<template lang="pug">
  #connect
    Background(image="connect_header")
      Title.title(content="connect")
    Background(image="connect_post_header")
      HeaderGrid({...header})
    Background(image="connect_background")
      .grid.two
        img.moved_left(src="/images/optimized/connect_1.jpg" style="--delay: 0.5")
        img.moved_right(src="/images/optimized/connect_2.jpg" style="--delay: 0.75")
        img.moved_left(src="/images/optimized/connect_3.jpg" style="--delay: 0.5")
        img.moved_right(src="/images/optimized/connect_4.jpg" style="--delay: 0.75")
    Footer
</template>

<style lang="sass">
  #connect
    :global
      > .container:first-of-type .content
        height: 50vh
        @media (min-width: 601px)
          height: 90vh

        h1
          height: 100%

      > .container:nth-of-type(2) .content
        height: 90vh

</style>
