import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import 'normalize.css/normalize.css';
import '@/assets/scss/base.scss';

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
