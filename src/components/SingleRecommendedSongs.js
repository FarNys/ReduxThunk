import React from "react";
import "../styles/SingleRecommendedSongs.scss";

const SingleRecommendedSongs = ({ el }) => {
  return (
    <a href={el.url} className="single_recommended_box">
      <div className="single_rec_img_container">
        <img src={el.images.background} alt={el.title} />
      </div>
      <h5>{el.title}</h5>
    </a>
  );
};

export default SingleRecommendedSongs;
