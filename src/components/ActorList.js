import ActorItem from "./ActorItem";
import React, { useState } from "react";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import actorStore from "../stores/actorStore";

const ActorList = () => {
  const [query, setQuery] = useState("");
  const actors = actorStore.actors;
  const actorList = actors
    .filter((actor) => actor.name.includes(query))
    .map((element) => <ActorItem actor={element} key={element.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{actorList}</ListWrapper>
    </>
  );
};

export default ActorList;
