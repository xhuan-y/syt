import { createApp } from "vue";
import "@/style/reset.scss";
import App from "@/App.vue";
import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";
import router from "@/router";

const app = createApp(App);
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
app.use(router);
app.mount("#app");
