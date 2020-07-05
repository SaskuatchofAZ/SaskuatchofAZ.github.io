import React from "react";

function Card(props) {
  return (
    <div class="col mb-3">
      <div class="card">
        <img src={props.img} className="card-img-top" alt={props.title} />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description} <a href={props.link} target="_blank">{props.title}</a></p>
          </div>
      </div>
    </div>
  );
}

export default Card;
