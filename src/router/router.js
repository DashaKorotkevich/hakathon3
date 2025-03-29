import MyProject from "@/pages/MyProject.vue"
import Projects from "@/pages/Projects.vue";
import Analytics from "@/pages/Analytics.vue";
import Profile from "@/pages/Profile.vue";
import Registration from "@/pages/Profile.vue";


import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import UserPage from "@/pages/UserPage.vue";


import { createRouter, createWebHistory } from "vue-router"

 const routes = [
  {
    path: '/',
    component: Projects
  },
  {
    path: '/Registration', // url строка
    component: Registration
  },
  {
    path: '/Analytics', // url строка
    component: Analytics
  },
  {
    path: '/Profile', // url строка
    component: Profile
  },
  {
    path: '/MyProject', // url строка
    component: MyProject
  },


  {
    path: '/UserPage', // url строка
    component: UserPage
  },
  {
    component: PostPageWithStore
  },
 ]

 const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
 })

 export default router;