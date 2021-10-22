import Vue from "vue";
import VueRouter from "vue-router";
import enterTitle from "../components/enterTitle.vue";
import enterURL from "../components/enterURL.vue";
import scriptBlocks from "../components/scriptBlocks.vue";

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
    path: "/scriptBlocks",
    name: "scriptBlocks",
    component: scriptBlocks,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
