import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_STARWARS_REQUEST,
  FETCH_STARWARS_SUCCESS,
  FETCH_STARWARS_FAILURE,
  fetchStarWarsRequest,
  fetchStarWarsSuccess,
  fetchStarWarsFailure,
  fetchStarWarsData
} from '../actions/starWarsActions'; // Adjust the import path as per your file structure

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchStarWarsData async action creator', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates FETCH_STARWARS_REQUEST action', () => {
    const expectedAction = { type: FETCH_STARWARS_REQUEST };
    expect(fetchStarWarsRequest()).toEqual(expectedAction);
  });

  it('creates FETCH_STARWARS_SUCCESS action with the correct payload', () => {
    const data = { /* Your test data here */ };
    const expectedAction = { type: FETCH_STARWARS_SUCCESS, payload: data };
    expect(fetchStarWarsSuccess(data)).toEqual(expectedAction);
  });

  it('creates FETCH_STARWARS_FAILURE action with the correct payload', () => {
    const error = new Error('Test error message');
    const expectedAction = { type: FETCH_STARWARS_FAILURE, payload: error };
    expect(fetchStarWarsFailure(error)).toEqual(expectedAction);
  });
});
