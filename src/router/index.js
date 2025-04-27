import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpComp from "@/views/help.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: { title: "Home page" },
    },
    {
        path: "/about",
        name: "about",
        meta: { title: "About page" },

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/help",
        name: "help",
        component: HelpComp,
        meta: { title: "Help page" },
    },
];

const router = new VueRouter({
    mode: "hash",
    routes,
});

export default router;
