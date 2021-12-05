<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
  import HeaderGrid from "./sub_components/HeaderGrid.svelte";
  import Article from "./sub_components/Article.svelte";

  const header = {
    title: "a world class denim studio",
    paragraph:
      "Mostafiz Uddin at Denim Expert Limited established a World Class Denim Studio that is home of more than 5000 designs and developments which are continuous source of inspiration for denim lovers and professionals",
  };

</script>

<template lang="pug">
  #denim_studio
    Title(content="denim studio")
    Background(image="denim_studio_header")
      HeaderGrid({...header})

    Background(image="denim_studio_background")

      Article
        div(slot="first")
          h3.moved_down(style="--delay: 0.75") The studio hosts a huge library of fabrics, with a strong focus on sustainable fabrications. 
          p.moved_up(style="--delay: 1") Recycled material, Gots certified, from affordable denim to heritage fabrications.
        div.faded_out(slot="last" style="--delay: 0.5")
          img(src="/images/optimized/denim_studio_1.jpg")


      Article
        div(slot="first")
          img.faded_out(src="/images/optimized/denim_studio_2.jpg" style="--dealy: 0.5")
          p.faded_out(style="--delay: 0.75") Mostafiz Uddin personally updates all samples & designs with the latest fits, patterns, fabrications and innovation in washes.
        div(slot="last")
          h3.faded_out(style="--delay: 1") The studio is open to clients and invitees .
          p.faded_out(style="--delay: 1.25") It archives over 4 000 samples making it a state-of-the-art studio. Inspirational brainstorming & fruitful work sessions are key occupations in the denim studio
          img.faded_out(src="/images/optimized/denim_studio_3.jpg" style="--delay: 1.5")

      Article
        div.moved_right(slot="first" style="--delay: 0.5")
          img(src="/images/optimized/denim_studio_4.jpg")
        div.moved_left(slot="last" style="--delay: 0.5")
          h3 Wash innovation is an important added value to each client.
          p The studio is the place where Mostafiz Uddin shares his in depth know-how of denim. One-on-one sessions with clients, team trainings, or larger seminars are hold in the denim studio.

</template>
