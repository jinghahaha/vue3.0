import { useStore } from 'vuex';
import { State } from '../store';

import { Getters, Dispatch, Commit } from './utils';

interface UseStoreHooks {
  state: State;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

const useStoreHooks = (): UseStoreHooks => {
  const store = useStore<State>();
  const { state, getters, dispatch, commit }: UseStoreHooks = store;
  return {
    state,
    getters,
    commit,
    dispatch,
  };
};

export default useStoreHooks;
