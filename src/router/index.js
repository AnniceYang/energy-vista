import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@views/Dashboard.vue";
import DeviceList from "@views/DeviceList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Dashboard", component: Dashboard },
    { path: "/devices", name: "DeviceList", component: DeviceList },
  ],
});
