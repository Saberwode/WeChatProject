<template>
  <div class="stories-body">
    <!-- 每次请求会返回六个故事和一个标题 -->
    <div v-for="(item, index) in stories" :key="index">
      <!-- 如果返回的日期不是今天，就显示分割线 -->
      <van-divider
        contentPosition="left"
        v-if="item.date != today"
        class="divider"
      >
        {{ item.date }}
      </van-divider>
      <!-- <div v-if="item.date !== today">{{ beforeDate(item) }}</div> -->

      <stories-item
        v-for="(i, index1) in item.stories"
        :key="index1"
        :imgUrl="i.images"
        :title="i.title"
        :hint="i.hint"
        :url="i.url"
      ></stories-item>
    </div>
  </div>
</template>
<script>
import StoriesItem from "../stories-item/StoriesItem";
export default {
  name: "StoriesWrap",
  components: {
    StoriesItem,
  },
  data() {
    return {
      stories: [],
      date: String,
      today: String,
      itemDate: String,
    };
  },
  computed: {
    flag() {
      return this.date === this.today;
    },
  },
  methods: {
    // 将返回的日期重写格式
    beforeDate(item) {
      let date = String(item).split("");
      let day = date[6] + date[7];
      let month = date[4] == "0" ? date[5] : date[4] + date[5];
      console.log(`${month}月${day}日`);
      return `${month} 月 ${day} 日`;
    },
    // 获取时间
    getDate() {
      const moment = require("../../../../node_modules/moment");
      this.today = moment().format("YYYYMMDD");
      this.date = this.today;
    },
    // 上拉加载函数
    load() {
      console.log(this.date);
      console.log(this.today);
      wx.showLoading({
        title: "加载中",
      });
      if (this.date === this.today) {
        wx.request({
          url: "http://news-at.zhihu.com/api/3/stories/latest",
          success: (res) => {
            if (res.data) {
              res.data.date = this.beforeDate(res.data.date);
              console.log(res);
              this.stories = this.stories.concat(res.data);
              this.date -= 1;
              wx.hideLoading();
            }
            console.log(this.stories);
          },
        });
      } else {
        wx.request({
          url: "http://news-at.zhihu.com/api/3/news/before/" + (this.date + 1),
          success: (res) => {
            res.data.date = this.beforeDate(res.data.date);

            this.stories = this.stories.concat(res.data);
            wx.hideLoading();
            this.date -= 1;
          },
        });
      }
    },
  },
  created() {
    this.getDate();
    this.load();
    this.today = this.beforeDate(this.today);
  },
  onReachBottom() {
    this.load();
  },
};
</script>
<style scoped>
.divider {
  font-weight: bolder;
  font-size: 20rpx;
}
</style>