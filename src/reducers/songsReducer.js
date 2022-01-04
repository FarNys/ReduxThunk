const initialState = {
  recommendedSongs: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAV_SONGS":
      return action.payload;
    default:
      return state;
  }
};
export default songsReducer;
