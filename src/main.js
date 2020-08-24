import Vue from 'vue';
import App from './App.vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import formCreate, {maker} from '@form-create/iview'

Vue.use (ViewUI);
Vue.use(formCreate)
Vue.use(maker)

Vue.config.productionTip = false;

new Vue ({
  render: h => h (App),
}).$mount ('#app');
