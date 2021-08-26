import { postLogin } from '../../server/common';

type userInfo = { userName: string; userId: number; realName: string };

export type commonState = {
  token: string;
  userInfo: userInfo;
  routeList: object[];
};

const SET_TOKEN = 'SET_TOKEN';
const SET_USER_INFO = 'SET_USER_INFO';

const state: commonState = {
  token: '',
  userInfo: { userId: 0, userName: '', realName: '' },
  routeList: [],
};

const getters = {};

const actions = {
  getToken({ commit }: any, params: { username: string; password: string }) {
    return new Promise(async (resolve, reject) => {
      const res = await postLogin(params);
      const {
        code,
        data: { userId, realName, username: userName, token },
      } = res;
      if (code === '200') {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userInfo', JSON.stringify({ userName, userId, realName }));
        commit(SET_TOKEN, token);
        commit(SET_USER_INFO, { userName, userId, realName });
        resolve(res);
      }
      reject(res);
    });
  },
};

const mutations = {
  [SET_TOKEN](state: commonState, payload: string) {
    state.token = payload;
  },
  [SET_USER_INFO](state: commonState, payload: userInfo) {
    state.userInfo = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
