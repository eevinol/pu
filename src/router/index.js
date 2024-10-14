import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../pages/Dashboard.vue";
import Home from "../pages/master/Home.vue";
import Shop from "../pages/master/Shop.vue";
import Card from "../pages/master/Card.vue";
import View from "../pages/master/View.vue";
import About from "../pages/master/About.vue";
import Contact from "../pages/master/Contact.vue";



const routes = [
    {
      name: "Dashboard",
      path: "/",
      component: dashboard,
      children: [
        {
          name: "Home",
          path: "/",
          component: Home,
        },
        {
          name: "Shop",
          path: "/shop",
          component: Shop,
        },
        {
          name: "View",
          path: "/view",
          component: View,
        },
        {
          name: "About",
          path: "/about",
          component: About,
        },
        {
        name: "Contact",
        path: "/contact",
          component: Contact,
        },
        {
        name: "Card",
        path: "/card",
          component: Card,
        },

      ],
    },
  ];


const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
