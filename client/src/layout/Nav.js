import React, { Component } from "react";

import navStyles from "../modules/nav.module.scss";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className={navStyles.navLinks}>
            <a className={navStyles.links} href="#/projects">
              <li>
                <h4>Projects</h4>
              </li>
            </a>
            <a className={navStyles.links} href="#/team">
              <li>
                {" "}
                <h4>Team</h4>
              </li>
            </a>

            <a className={navStyles.links} href="#/practice">
              <li>
                {" "}
                <h4>Practice</h4>
              </li>
            </a>
            <a className={navStyles.links} href="/">
              <li>
                {" "}
                <h4>Home</h4>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
