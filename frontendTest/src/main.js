import { createApp } from 'vue'

import App from './App.vue'
import router from "./router";
import BootstrapVue3 from 'bootstrap-vue-3';
import VueApexCharts from "vue3-apexcharts";
import vClickOutside from "click-outside-vue3";
import { registerScrollSpy } from 'vue3-scroll-spy';


import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_SERVER

axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + sessionStorage.token
    return config
}, (error) => {
    // store.isLoader = false;
    Promise.reject(error)
})

import Maska from 'maska'
import {i18n} from "./i18n.js"

import 'sweetalert2/dist/sweetalert2.min.css';
import '@vueform/slider/themes/default.css';

import store from "./state/store";

import "../src/design/app.scss";

import "../src/design/css/custom.css"
// file css
import "../src/design/css/file-upload.css"

// datatables
import { ClientTable } from 'v-tables-3';

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

// drag and drop
import VueNestable from 'vue-nestable'



createApp(App)
  .use(store)
  .use(PerfectScrollbar)
  .use(VueAxios, axios)
  .use(router)
  .use(require('vue-chartist'))
  .use(BootstrapVue3)
  .use(VueApexCharts)
  .use(vClickOutside)
  .use(VueNestable)
  .use(i18n)
  .use(ClientTable)
  .use(registerScrollSpy)
  .use(Maska)
  .mount('#app')
