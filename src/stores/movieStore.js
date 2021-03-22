import axios from "axios";
import { makeAutoObservable } from "mobx";

class MovieAPIStore {
  movie = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovie = async () => {
    const response = await axios.get("http://localhost:8000/movies");
    this.movie = response.data;
  };
}

const movieAPIStore = new MovieAPIStore();
movieAPIStore.fetchMovie();

export default movieAPIStore;