import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false;
Vue.filter("upper", function (v) {
    return v.toUpperCase();
});
Vue.directive("format", {
    bind: function (el, binding) {
        console.log(el, binding.modifiers);
    },
});
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
