import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import Table from './components/Table.vue';

import 'normalize.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus, { locale: zhCn });
app.use(router);
app.use(store);
app.component('page-table', Table);

router.isReady().then(() => app.mount('#app'));
