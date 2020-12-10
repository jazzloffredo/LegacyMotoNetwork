import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/landing",
    component: () => import("@/views/Landing.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    component: () => import("@/views/shells/MainShell.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "feed",
        component: () =>
          import(/* webpackChunkName: "feed" */ "@/views/Feed.vue"),
      },
      {
        path: "groups",
        component: () =>
          import(/* webpackChunkName: "groups" */ "@/views/Groups.vue"),
      },
      {
        path: "preferences",
        component: () =>
          import(
            /* webpackChunkName: "preferences" */ "@/views/Preferences.vue"
          ),
      },
      {
        path: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      },
      {
        path: "report",
        component: () =>
          import(/* webpackChunkName: "report" */ "@/views/Report.vue"),
      },
    ],
  },
  {
    path: "/error",
    component: () => import("@/views/shells/ErrorShell.vue"),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "404",
        name: "not-found",
        component: () =>
          import(
            /* webpackChunkName: "not-found" */ "@/views/errors/NotFound.vue"
          ),
      },
      {
        path: "500",
        name: "server-error",
        component: () =>
          import(
            /* webpackChunkName: "server-error" */ "@/views/errors/ServerError.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
