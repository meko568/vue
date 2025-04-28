import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpComp from "@/views/help.vue";
import ContactComp from "@/views/contact.vue";
import BlogComp from "@/views/blog.vue";

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
    {
        path: "/contact",
        name: "contact",
        component: ContactComp,
        meta: { title: "Contact page" },
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogComp,
        meta: { title: "Blog page" },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
