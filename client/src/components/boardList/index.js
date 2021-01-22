import React from "react";
import Masonry from "react-masonry-css";
import "./index.css"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
  800: 2
};

export function BoardList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
export function BoardCard({
  name,
  picture,
  budget,
  comment,
  goals
}) {

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div>
        <div className="card">
          <img className="card-img-top" src={picture} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {comment}
            </p>
            <p className="card-text">
              {budget}
            </p>
            <p className="card-text">
              {goals}
            </p>
          </div>
        </div>
      </div>
    </Masonry>
  );
}
