import axios from "axios";
const options = {
  method: "GET",
  url: "https://free-football-soccer-videos.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
    "x-rapidapi-key": "1a6718770emsh2f3695f15ac9900p1dcf9djsn42038a44656c",
  },
};
export const getTeams = () => async (dispatch) => {
  try {
    const { data } = await axios.request(options);
    // const data = await res.json();
    dispatch({ type: "GET_MATCHES", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
