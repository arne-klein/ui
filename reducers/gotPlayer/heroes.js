import { playerHeroesActions } from '../../actions';
import createReducer from '../reducerFactory';

const initialState = {
  loading: true,
  error: false,
  loaded: false,
  list: [],
  sortState: '',
  sortField: '',
  sortFn: f => f,
};

export default createReducer(initialState, playerHeroesActions);

export const getPlayerHeroes = {
  getPlayerHeroesById: (state, id) => {
    if (!state.yaspReducer.gotPlayer.heroes.byId[id]) {
      return {
        ...initialState,
      };
    }
    return state.yaspReducer.gotPlayer.heroes.byId[id];
  },
  getError: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).error,
  getLoading: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).loading,
  isLoaded: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).loaded,
  getHeroList: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).list,
  getSortState: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).sortState,
  getSortField: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).sortField,
  getSortFn: (state, id) => getPlayerHeroes.getPlayerHeroesById(state, id).sortFn,
};
