import React from "react";
import { ActorCard, ActorButton } from "../styles";

const ActorItem = (props) => {
  const actor = props.actor;
  return (
    <ActorCard>
      <p>{actor.name}</p>
      <p>{actor.age}</p>
      <p>{actor.nationality}</p>
      <p>{actor.Movies.map((movie) => movie.name + " ")}</p>
      <ActorButton>List of Movies</ActorButton>
    </ActorCard>
  );
};
export default ActorItem;
