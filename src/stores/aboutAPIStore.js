import axios from "axios";
import { makeAutoObservable } from "mobx";

class AboutAPIStore {
  aboutPage = null;

  constructor() {
    makeAutoObservable(this);
  }

  initialiseAPI = async () => {
    const response = await axios.get("http://localhost:8000/");
    this.aboutPage = response.data;
  };

  addElement = async () => {
    const elements = {
      element: [
        {
          tag: "h1",
          value: "Bye",
        },
      ],
    };
    try {
      await axios.post("http://localhost:8000/elements/", elements);
      this.initialiseAPI();
    } catch (error) {
      console.log(error);
    }
  };
}

const aboutAPIStore = new AboutAPIStore();
aboutAPIStore.initialiseAPI();

export default aboutAPIStore;
