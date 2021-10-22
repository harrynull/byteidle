import Vue from 'vue'
import App from './App.vue'

import SuiVue from 'semantic-ui-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'semantic-ui-css/semantic.min.css';
import Toasted from 'vue-toasted';

import PortalVue from 'portal-vue';
Vue.use(PortalVue);
library.add(faCaretUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(SuiVue)
Vue.use(Toasted, {position:'bottom-center', duration: 3000})
Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  render: h => h(App),
}).$mount('#app')
