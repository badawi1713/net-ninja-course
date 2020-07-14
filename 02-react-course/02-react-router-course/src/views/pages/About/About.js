import React from "react";

import Rainbow from "../../components/HOC/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla
        non, in maiores error aperiam consequuntur iure voluptates doloremque
        numquam? Aut, sequi! Numquam quod magnam, accusamus illum et quibusdam
        laboriosam. About page.
      </p>
    </div>
  );
};

export default Rainbow(About);
