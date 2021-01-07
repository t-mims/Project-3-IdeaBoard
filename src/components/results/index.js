import React from "react";

function Results(props){
    return (
        <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
            {/* Will need to correct values for selection of res in apis format */}
          <img alt={result.title} className="img-fluid" src={results.image.url} />
        </li>
      ))}
    </ul>
    )
}
export default Results