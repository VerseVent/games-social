import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import MissingView from "../views/MissingView/MissingView.vue";
import UserView from "../views/UserView/UserView.vue";
import Games from "../components/Games/Games.vue";
import GameRooms from "../components/GameRooms/GameRooms.vue";
import Friends from "../components/Friends/Friends.vue";
import AxiosAPI from "../service/AxiosAPI";
import store from "@/store";
import Notiflix from "notiflix";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { auth: false },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { auth: false },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    async beforeEnter(to, from, next) {
      if (localStorage.getItem("jwt")) {
        try {
          await store.dispatch("authUser");
          Notiflix.Notify.warning("You already logged, please log out");
          next("/user");
        } catch (e) {
          next();
        }
      } else {
        next();
      }
    },
    meta: { auth: false },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { auth: false },
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    meta: { auth: true },

    children: [
      {
        path: "games",
        name: "games",
        component: Games,
        meta: { auth: true },
      },
      {
        path: "friends",
        name: "friends",
        component: Friends,
        meta: { auth: true },
      },
      {
        path: "gameRooms/:gameId",
        name: "gameRooms",
        component: GameRooms,
        meta: { auth: true },
      },
    ],
  },
  {
    path: "*",
    name: "Missing",
    component: MissingView,
    meta: { auth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    try {
      await store.dispatch("authUser");
      next();
    } catch (e) {
      next("/login");
    }
  } else {
    try {
      await store.dispatch("authUser");
      next();
    } catch (e) {
      next();
    }
  }
});

export default router;
