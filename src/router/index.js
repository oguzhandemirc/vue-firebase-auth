import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import AddArticle from "@/components/admin/AddArticle.vue";
import Register from "@/components/users/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/addarticle",
      component: AddArticle,
    },
    {
      path: "/register",
      component: Register,
    },
  ],
});

export default router;
