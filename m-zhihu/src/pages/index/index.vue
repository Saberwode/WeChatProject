<template>
  <div class="body">
    <!-- 头部 -->
    <header-content></header-content>
    <!-- 轮播图 -->
    <banner-content></banner-content>
    <!-- 故事部分 -->
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