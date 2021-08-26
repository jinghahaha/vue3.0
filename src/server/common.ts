import { post, get } from '../common/request';

export const postLogin = (data: { username: string; password: string }) => post('/auth/login', data);

export const getAuthMenu = () => get('/permission/user/queryUserPermissions');
