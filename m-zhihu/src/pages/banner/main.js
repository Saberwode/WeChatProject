import Vue from 'vue';
import Banner from './Banner.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
const banner = new Vue(Banner)
banner.$mount();