import Vue from 'vue';
import ViewUI from 'view-design';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './style/theme/index.less';
import './style/index.scss';

Vue.config.productionTip = false;

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
