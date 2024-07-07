import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import AddArticle from "@/components/admin/AddArticle.vue";
import Register from "@/components/users/Register.vue";
import UpdateArticle from "@/components/admin/UpdateArticle.vue";

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
      path: "/updateArticle/:id", // id is a dynamic parameter
      component: UpdateArticle,
    },
    // {
    //   path: "/updateArticle", // id is a dynamic parameter
    //   component: UpdateArticle,
    // },
    {
      path: "/register",
      component: Register,
    },
  ],
});

export default router;
