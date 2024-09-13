import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ProductsDisplay from "./components/ProductsDisplay.vue"
import CheckoutDisplay from "./components/CheckoutDisplay.vue"

library.add(faShoppingCart, faDollarSign);

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: ProductsDisplay
    },
    {
      path: "/checkout",
      component: CheckoutDisplay
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
