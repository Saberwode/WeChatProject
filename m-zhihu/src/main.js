import App from './app.vue';
import Vue from 'vue';

App.mpType = "app";
const app = new Vue(App);
app.$mount();