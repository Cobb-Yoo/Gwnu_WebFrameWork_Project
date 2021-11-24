import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/img",
    name: "IMG",
    component: () => import("../views/image.vue"),
  },
  {
    path: "/text",
    name: "TXT",
    component: () => import("../views/text.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
