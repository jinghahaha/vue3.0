import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // scroll to id `#app` + 200px, and scroll smoothly (when supported by the browser)
    return {
      el: '#app',
      top: 0,
      left: 0,
      behavior: 'smooth',
    };
  },
});

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  const {
    meta: { isRequiredAuth },
  } = to;
  const token = sessionStorage.token;
  if (isRequiredAuth && !token) next({ name: 'Login' });
  else next();
});

/**
 * 路由错误回调
 */
router.onError((handler) => {
  console.log('error:', handler);
});

export default router;
