import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import UserView from "../views/UserView/UserView.vue";
import Games from "../components/Games/Games.vue";
import Friends from "../components/Friends/Friends.vue";
import AxiosAPI from "../service/AxiosAPI";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    async beforeEnter(to, from, next) {
      const ax = new AxiosAPI();
      const status = await ax.authUser();
      if (status === 200) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "games",
        name: "games",
        component: Games,
      },
      {
        path: "friends",
        name: "friends",
        component: Friends,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
