import { combineReducers } from 'redux';
import {
  FETCH_STARWARS_REQUEST,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILURE,
} from '../actions/starWarsActions';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARWARS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_STARWARS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_STARWARS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  starWars: starWarsReducer,
});

export default rootReducer;
