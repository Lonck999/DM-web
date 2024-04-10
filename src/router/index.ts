import { createRouter, createWebHistory } from "vue-router";

// 引入
import Home from "../page/home/Home.vue";
import Doctor from "../page/doctor/Doctor.vue";
import QRCode from "../components/QRCode.vue";
import Inquire from "../components/Inquire.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
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
      path: "/inquire",
      name: "Inquire",
      component: Inquire,
    },
  ],
});
