import axios from "axios";
import { makeAutoObservable } from "mobx";

class ActorAPIStore {
  actors = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchActor = async () => {
    const response = await axios.get("http://localhost:8000/actors");
    this.actors = response.data;
  };
}

const actorAPIStore = new ActorAPIStore();
actorAPIStore.fetchActor();

export default actorAPIStore;