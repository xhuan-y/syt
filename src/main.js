import { createApp } from "vue";
import "@/style/reset.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "@/App.vue";
import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";
import router from "@/router";

const app = createApp(App);
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
