<template>
  <div class="stories-body">
    <div v-for="(item, index) in stories" :key="index">
      <van-divider
        contentPosition="left"
        v-if="item.date != today"
        class="divider"
      >
        {{ item.date }}
        <!-- {{ beforeDate(item) }} -->
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
    beforeDate(item) {
      let date = String(item).split("");
      let day = date[6] + date[7];
      let month = date[4] == "0" ? date[5] : date[4] + date[5];
      console.log(`${month}月${day}日`);
      return `${month} 月 ${day} 日`;
    },
    // setToday(item) {},
    getDate() {
      const moment = require("../../../../node_modules/moment");
      this.today = moment().format("YYYYMMDD");
      this.date = this.today;
    },
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
        console.log(this.stories);
      }
    },
  },
  created() {
    this.getDate();
    this.load();
    this.today = this.beforeDate(this.today);
    console.log(this.today);
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