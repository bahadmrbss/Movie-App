const initialState = {
  movies: [],
  movie: {},
  fetching: false,
  fetched: false,
  error: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_MOVIES_PENDING":
      return { ...state, fetching: true };
    case "FETCH_MOVIES_FULFILLED":
      return { ...state, movies: payload, fetching: false, fetched: true };
    case "FETCH_MOVIES_REJECTED":
      return { ...state, error: payload, fetching: false };
    case "GET_MOVIES_PENDING":
      return { ...state, fetching: true };
    case "GET_MOVIE_FULFILLED":
      return { ...state, movies: payload, fetching: false, fetched: true };
    case "GET_MOVIE_REJECTED":
      return { ...state, error: payload, fetching: false };
    case "DELETE_MOVIE_PENDING":
      return { ...state, fetching: true };
    case "DELETE_MOVIE_FULFILLED":
      return {
        ...state,
        movies: state.movies.filter((item) => item.id !== payload.id),
        fetching: false,
        fetched: true,
      };
    case "DELETE_MOVIE_REJECTED":
      return { ...state, error: payload, fetching: false };
    default:
      return state;
  }
};

export default reducer;
