import axios from "axios";
export const getFavorSongs = () => async (dispatch) => {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/songs/list-recommendations",
    params: { key: "484129036", locale: "en-US" },
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": "20f6895bcbmsh842ea3ded9cd0ffp1fb249jsnd927c8e845ac",
    },
  };
  try {
    const { data } = await axios.request(options);
    // console.log(data.tracks);
    dispatch({ type: "GET_FAV_SONGS", payload: data.tracks });
  } catch (error) {
    console.log(error);
  }
};
