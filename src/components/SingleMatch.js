import React from "react";

const SingleMatch = ({ el }) => {
  return (
    <div className="match_container">
      <div className="match_image_container">
        <img src={el.thumbnail} alt={el.title} />
      </div>
      <div className="match_title">{el.title}</div>
      <div className="info_match">
        <p>{el.date.toLocaleString()}</p>
        <a href={el.url}>Link</a>
      </div>
    </div>
  );
};

export default SingleMatch;
