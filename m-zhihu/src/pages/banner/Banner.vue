<template>
  <div>
    <swiper
      autoplay
      indicator-dots
      circular
      :interval="interval"
      indicator-color="rgba(255, 255, 255,.3)"
      indicator-active-color="#fff"
    >
      <div v-for="(item, index) in swiperItem" :key="index">
        <swiper-item>
          <!-- <van-image :src="item.image" alt="" class="img" fit="contain" /> -->
          <image mode="widthFix" :src="item.image" class="img" />
          <p class="main-title">{{ item.title }}</p>
          <p class="author">{{ item.hint }}</p>
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BannerContent",
  data() {
    return {
      swiperItem: [],
      swiperOptions: {
        pagination: ".swiper-pagination",
        // 是否可以点击
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
      },

      interval: "5000",
    };
  },
  created() {
    // 获取轮播图信息
    wx.request({
      url: "http://news-at.zhihu.com/api/3/stories/latest ",
      success: (res) => {
        if (res.data) {
          this.swiperItem = res.data.top_stories;
        }
      },
    });
  },
};
</script>
<style scoped>
image {
  width: 100%;
}
swiper {
  height: 600rpx;
}
.main-title {
  color: white;
  position: absolute;
  top: 390rpx;
  left: 40rpx;
  font-size: 40rpx;
  font-weight: bolder;
}
.author {
  color: white;
  position: absolute;
  top: 500rpx;
  left: 40rpx;
}
</style>