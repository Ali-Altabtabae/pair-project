import ActorItem from "./ActorItem";
import React, { useState } from "react";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import actorStore from "../stores/actorStore";
import { observer } from "mobx-react";

const ActorList = () => {
  const [query, setQuery] = useState("");
  const actorList = actorStore.actors
    .filter((actor) => actor.name.toLowerCase().includes(query.toLowerCase()))
    .map((element) => <ActorItem actor={element} key={element.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{actorList}</ListWrapper>
    </>
  );
};

export default observer(ActorList);
