import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueI18n from 'vue-i18n';

import VueProgressBar from 'vue-progressbar';

import App from './components/App';
import router from './router';
import store from './store';
sync(store, router);

const locales = {};

const options = {
	color: '#00BCD4',
	thickness: '5px',
	inverse: true
};

Vue.use(VueAxios, axios);
Vue.use(VueI18n);

Vue.use(VueProgressBar, options);

Vue.config.lang = 'en';

Object.keys(locales).forEach(lang => {
	Vue.locale(lang, locales[lang]);
});

const app = new Vue({
	router,
	store,
	...App
});

export { app, router, store };
