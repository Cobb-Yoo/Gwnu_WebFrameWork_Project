import Vue from "vue";
import VueRouter from "vue-router";
import enterTitle from "../components/enterTitle.vue";
import enterURL from "../components/enterURL.vue";
import choicePage from "../components/choicePage.vue";
import txtPage from "../components/txtPage.vue";
import imgPage from "../components/imgPage.vue";

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
  {
    path: "/choicePage",
    name: "choicePage",
    component: choicePage,
  },
  {
    path: "/txtPage",
    name: "txtPage",
    component: txtPage,
  },
  {
    path: "/imgPage",
    name: "imgPage",
    component: imgPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
