import { createApp } from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
// 引入pinia
import { createPinia } from 'pinia'

const app = createApp(App);
// 使用router
app.use(router);
// 使用pinia
app.use(createPinia());

app.mount("#app");
