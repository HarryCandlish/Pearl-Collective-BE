import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

class Home extends Component {
  render() {
    return (
      <div className={homeStyles.titleContainer}>
        <div>
          <h1 className={homeStyles.title}>PEARL COLLECTIVE</h1>
        </div>
      </div>
    );
  }
}

export default Home;
