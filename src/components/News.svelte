<script>
  import Title from "./sub_components/Title.svelte";
  import Background from "./sub_components/Background.svelte";
</script>

<template lang="pug">
  #news
    Background(image="news_background")
      Title(content="news")
      .grid.three
        .img_cont.moved_right(style="--delay: 0.5")
          img.contact_background(src="/images/optimized/news_1.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_2.jpg")
        .img_cont.moved_right(style="--delay: 1")
          img.contact_background(src="/images/optimized/news_3.jpg")
        .img_cont.moved_right(style="--delay: 0.5")
          img.contact_background(src="/images/optimized/news_4.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_5.jpg")
        .img_cont.moved_right(style="--delay: 1")
          img.contact_background(src="/images/optimized/news_6.jpg")
        .img_cont.moved_right(style="--delay: 0.5")
          img.contact_background(src="/images/optimized/news_7.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_8.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_9.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_10.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_11.jpg")
        .img_cont.moved_right(style="--delay: 0.75")
          img.contact_background(src="/images/optimized/news_12.jpg")
        .img_cont.moved_right(style="--delay: 1")
          img.contact_background.news_video(src="/videos/bbc.jpg")

</template>

<style lang="sass">
  #news
    .grid
      img
        width: 100%
        height: 50vh
        // padding: 3%
      .news_video
        height: 30vh

</style>
