<template>
  <!-- 单个项目 -->
  <div class="item-body">
    <a :href="url">
      <div class="item">
        <div class="item-content">
          <p class="p-title">{{ title }}</p>
          <p class="p-hint">{{ hint }}</p>
        </div>
        <img :src="imgUrl" alt="" class="item-img" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "StoriesItem",
  props: {
    title: {
      type: String,
    },
    imgUrl: {
      type: Array,
    },
    hint: {
      type: String,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style scoped>
.item-body {
  padding: 28rpx 28rpx;
}
.item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  /* padding: 20rpx; */
}
img {
  width: 160rpx;
  height: 160rpx;
  border-radius: 8rpx;
}
.item-content {
  width: 480rpx;
}
a {
  text-decoration: none;
  color: black;
}
.p-title {
  font-size: 32rpx;
  font-weight: bolder;
}
.p-hint {
  margin-top: 10rpx;
  font-size: 24rpx;
  opacity: 0.6;
}
/* a {
  text-decoration: none;
  color: black;
}
.item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20rpx;
}
.item-content {
  display: flex;
  flex-direction: column;
}
.p-title {
  font-size: 20rpx;
  font-weight: bolder;
}
.p-hint {
  font-size: 15rpx;
  opacity: 0.6;
}
.item-img {
  width: 100rpx;
  height: 100rpx;
  border-radius: 5rpx;
} */
</style>