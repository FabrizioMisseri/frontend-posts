import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SecondPage from "./pages/SecondPage.vue";
import NotFound from "./pages/NotFound.vue";
import SinglePost from "./pages/SinglePost.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/second',
            name: 'second',
            component: SecondPage,
        },
        {
            path: '/post/:id',
            name: 'single-post',
            component: SinglePost,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },
    ],
});

export { router };