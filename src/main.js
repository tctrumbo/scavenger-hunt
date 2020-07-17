import Vue from 'vue';
import App from './App.vue';
import Vuetify from "vuetify";
import Router from 'vue-router'

import Create from "./views/CreateScavengerHunt.vue"


Vue.config.productionTip = false;
Vue.use(Router);
const router = new Router({
  routes: [
    { path: '/create', name: "create", component: Create },
   
  ]
})

Vue.use(Vuetify);


new Vue({router,
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
