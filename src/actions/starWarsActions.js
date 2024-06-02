export const FETCH_STARWARS_REQUEST = 'FETCH_STARWARS_REQUEST';
export const FETCH_STARWARS_SUCCESS = 'FETCH_STARWARS_SUCCESS';
export const FETCH_STARWARS_FAILURE = 'FETCH_STARWARS_FAILURE';

export const fetchStarWarsRequest = () => ({
  type: FETCH_STARWARS_REQUEST,
});

export const fetchStarWarsSuccess = (data) => ({
  type: FETCH_STARWARS_SUCCESS,
  payload: data,
});

export const fetchStarWarsFailure = (error) => ({
  type: FETCH_STARWARS_FAILURE,
  payload: error,
});

export const fetchStarWarsData = ({ type, name }) => async (dispatch) => {
  dispatch(fetchStarWarsRequest());
  try {
    const response = await fetch(`http://localhost:8080/api/v1/starwars?type=${type}&name=${name}`);
    const data = await response.json();
    dispatch(fetchStarWarsSuccess(data));
  } catch (error) {
    dispatch(fetchStarWarsFailure(error.message));
  }
};
