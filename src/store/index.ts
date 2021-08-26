import { createStore, createLogger } from 'vuex';

import modules from './modules';

import { commonState } from './modules/common';

const debug = process.env.NODE_ENV !== 'production';

export interface State {
  common: commonState;
}

export default createStore<State>({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
