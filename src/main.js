import Vue from 'vue'
import App from './App.vue'

import './css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import vuetify from './plugins/vuetify';

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

library.add(faSearch)
library.add(faSort)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
