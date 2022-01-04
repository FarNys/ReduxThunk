import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorSongs } from "../actions/getFavSongs";
import SingleRecommendedSongs from "./SingleRecommendedSongs";
import "../styles/FavSongs.scss";
const FavSongs = () => {
  const dispatch = useDispatch();
  const reccomendedSongs = useSelector((state) => state.songsReducer);
  console.log(reccomendedSongs);
  useEffect(() => {
    dispatch(getFavorSongs());
  }, [dispatch]);
  return (
    <div className="favSongs_container">
      <h1>Recommended Songs</h1>
      <div className="single_recommended_container">
        {reccomendedSongs.length > 0 ? (
          reccomendedSongs.map((el) => (
            <SingleRecommendedSongs key={el.key} el={el} />
          ))
        ) : (
          <h3>Loading . . .</h3>
        )}
      </div>
    </div>
  );
};

export default FavSongs;
