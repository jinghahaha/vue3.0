export default [
  {
    path: '/permission',
    name: '权限管理',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/permission/user',
        name: '用户管理',
      },
      {
        path: '/permission/group',
        name: '用户组管理',
      },
      {
        path: '/permission/role',
        name: '角色管理',
      },
    ],
  },
  {
    path: '/login',
    name: '登录',
    isHide: true,
  },
];
