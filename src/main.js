import { createApp } from 'vue'
import App from './App.vue'
import './styles/styles.scss'

import 'animate.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'; 
axios.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.api_key = '3cf4c290b5bb3cfe2aab8cd87ff39bfc';
  return config;
});

createApp(App)
  .use(VueAxios, axios)
  .mount('#app')
