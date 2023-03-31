import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/create",
    name: "product.create",
    component: () => import("../views/product/Create.vue"),
  },
  {
    path: "/edit/:id",
    name: "product.edit",
    component: () => import("../views/product/Edit.vue"),
  },
  {
    path: "/product/:id",
    name: "product.show",
    component: () => import("../views/product/Show.vue"),
  },
  {
    path: "/create",
    name: "category.create",
    component: () => import("../views/category/Create.vue"),
  },
  {
    path: "/edit/:id",
    name: "category.edit",
    component: () => import("../views/category/Edit.vue"),
  },
  {
    path: "/category/:id",
    name: "category.show",
    component: () => import("../views/category/Show.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
