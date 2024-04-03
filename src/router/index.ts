import { createRouter, createWebHistory } from "vue-router";

// 引入
import Home from "../page/home/Home.vue";
import Doctor from "../page/doctor/Doctor.vue";
import QRCode from "../components/QRCode.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/doctor",
      name: "Doctor",
      component: Doctor,
    },
    {
      path: "/qrcode",
      name: "QRCode",
      component: QRCode,
    },
    {
      path: "/",
      redirect: "/home",
    },
]
});