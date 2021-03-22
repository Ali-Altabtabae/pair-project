import { observer } from "mobx-react";
import React from "react";
import aboutAPIStore from "../stores/aboutAPIStore"

const About = () => {
  return (
    <div>
      <p>This API Store</p>
      <p>{aboutAPIStore.aboutPage}</p>
      <button onClick={() => aboutAPIStore.addElement}>Add</button>
    </div>
  );
};

export default observer(About);
