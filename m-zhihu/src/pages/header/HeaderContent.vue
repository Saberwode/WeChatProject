<template>
  <div class="header">
    <div class="date">
      <div class="day">{{ day }}</div>
      <div class="month">{{ month }}月</div>
    </div>
    <!-- <el-divider direction="vertical"></el-divider> -->
    <div class="divider"></div>
    <div class="header-r">
      <div class="title">知乎日报</div>

      <img src="../../../static/images/user.png" alt="" class="user-img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    date() {
      const date = new Date();
      let year = date.getFullYear();
      return year;
    },
    month() {
      // const nzhcn = require("../../node_modules/nzh/cn"); //直接使用简体中文
      const nzhcn = require("../../../node_modules/nzh/cn");
      const date = new Date();
      let month1 = date.getMonth(); //存储月份
      month1 = nzhcn.encodeS(month1 + 1);
      // console.log(month1);
      return month1;
    },
    day() {
      const date = new Date();
      let day = date.getDate(); //存储日期
      return day;
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  /* padding: 15px; */
  padding: 20rpx 10rpx;
}
.date {
  width: 10%;
  text-align: center;
}
.day {
  font-weight: bold;
  font-size: 40rpx;
}
.month {
  font-size: 22rpx;
  font-weight: bold;
  /* margin-left: 8rpx; */
}
.title {
  font-size: 50rpx;
  font-weight: bold;
}
.header-r {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.divider {
  padding: 12px 6px 0px 6px;
  margin-left: 6px;
  border-left: 1px solid #000;
  height: 40rpx;
  opacity: 0.3;
}
.user-img {
  width: 100rpx;
  height: 100rpx;
  padding-right: 20rpx;
  /* margin-right: 30rpx; */
}
</style>