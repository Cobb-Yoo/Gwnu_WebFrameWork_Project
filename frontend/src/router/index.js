import Vue from "vue";
import VueRouter from "vue-router";
import enterTitle from "../components/enterTitle.vue";
import enterURL from "../components/enterURL.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "enterTitle",
    component: enterTitle,
  },
  {
    path: "/enterURL",
    name: "enterURL",
    component: enterURL,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
