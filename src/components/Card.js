import React from "react";
// style
import "./Card.css";

const Card = ({ profile }) => {
  const { id, first_name, last_name, email, title, avatar } = profile;

  return (
    <div className="card">
      {avatar && <img src={avatar} alt={`${first_name} ${last_name}`} />}
      <h2>{`${first_name} ${last_name}`}</h2>
      <button>Follow</button>
      <h3>{title}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
