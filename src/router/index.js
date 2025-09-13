import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Anasayfa",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Ana sayfa",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "Giriş",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: {
      title: "Kayıt Ol",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "404",
    },
  },
  {
    path: "/kayitlar",
    name: "Kayıtlar",
    component: () => import("@/views/Lists.vue"),
    meta: {
      title: "Kayıtlar",
    },
  },
  {
    path: "/kayit-olustur",
    name: "Kayıt Oluştur",
    component: () => import("@/views/KayitCreate.vue"),
    meta: {
      title: "Kayıt Oluştur",
    },
  },
  {
    path: "/kayitlar/duzenle/:id",
    name: "Kayıt Düzenle",
    component: () => import("@/views/KayitEdit.vue"),
    meta: {
      title: "Kayıt Düzenle",
    },
  },
  {
    path: "/pricing",
    name: "Ödeme",
    component: () => import("@/views/Pricing.vue"),
    meta: {
      title: "Ödeme Sayfası",
    },
  },
  {
    path: "/profile",
    name: "Profil",
    component: () => import("@/views/Profile.vue"),
    meta: {
      title: "Profil",
    },
  },
  {
    path: "/destek",
    name: "Destek",
    component: () => import("@/views/Tickets.vue"),
    meta: {
      title: "Destek",
    },
  },
  {
    path: "/pricing/odeme-basarili",
    name: "Ödeme Başarılı",
    component: () => import("@/views/PriceSuccess.vue"),
    meta: {
      title: "Ödeme Başarılı",
    },
  },
  {
    path: "/pricing/odeme-basarisiz",
    name: "Ödeme Başarısız",
    component: () => import("@/views/PriceError.vue"),
    meta: {
      title: "Ödeme Başarısız",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "Ecusave | " + to.meta.title;
  next();
});

export default router;
