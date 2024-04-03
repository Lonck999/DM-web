import { createApp } from 'vue'
import App from './App.vue'
// 引入router
import router from './router'

const app = createApp(App);
// 使用router
app.use(router);

app.mount("#app");
