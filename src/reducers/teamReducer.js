const teamReducer = (
  state = {
    matches: null,
    count: 4,
  },
  action
) => {
  switch (action.type) {
    case "GET_MATCHES":
      return { ...state, matches: action.payload };
    default:
      return state;
  }
};
export default teamReducer;
