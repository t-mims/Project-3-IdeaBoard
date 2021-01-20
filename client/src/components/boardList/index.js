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
        <div class="card">
          <img class="card-img-top" src={picture} alt=""/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
              {comment}
            </p>
            <p class="card-text">
              {budget}
            </p>
            <p class="card-text">
              {goals}
            </p>
          </div>
        </div>
      </div>
    </Masonry>
  );
}
