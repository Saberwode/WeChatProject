<template>
  <div class="body">
    <header-content></header-content>
    <banner-content></banner-content>
    <stories-wrap></stories-wrap>
  </div>
</template>
<script>
import HeaderContent from "../header/HeaderContent";
import BannerContent from "../banner/Banner";
import StoriesWrap from "../Stories/stories-wrap/StoriesWrap";
export default {
  name: "IndexItem",
  components: {
    HeaderContent,
    BannerContent,
    StoriesWrap,
  },
};
</script>
<style scoped>
.body {
  overflow: hidden;
  width: 100%;
}
</style>