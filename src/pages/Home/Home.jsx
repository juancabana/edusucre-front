import React from "react";

import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
      </div>
    );
  }
}

export default Home;
