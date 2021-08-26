import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import ElementPlus from 'element-plus';

import 'normalize.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus, { size: 'small' });
app.use(router);
app.use(store);

router.isReady().then(() => app.mount('#app'));
