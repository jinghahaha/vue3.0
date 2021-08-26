import { defineAsyncComponent } from 'vue'; // 定义异步组件

export const routes = [
  {
    path: '/',
    redirect: '/permission/user',
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue'),
    meta: {
      isRequiredAuth: false,
    },
  },
  {
    path: '/permission/user',
    name: 'User',
    component: () => import('../views/permission/User.vue'),
    meta: {
      isRequiredAuth: true,
    },
  },
  {
    path: '/permission/group',
    name: 'Group',
    component: defineAsyncComponent({
      loader: () => import('../views/permission/Group.vue'),
      delay: 200,
      timeout: 3000,
    }),
    meta: {
      isRequiredAuth: true,
    },
  },
  {
    path: '/permission/role',
    name: 'Role',
    component: defineAsyncComponent(() => import('../views/permission/Role.vue')),
    meta: {
      isRequiredAuth: true,
    },
  },
];
