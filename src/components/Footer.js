import React from "react";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        © 2019{" "}
        <Link to="/" className="a-footer">
          <span>Piclab</span>
        </Link>
        . All Right Reserved. Designed and Created By{" "}
        <a
          href="https://www.yukiinasawa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="a-footer"
        >
          Yuki Inasawa.
        </a>
      </div>
    );
  }
}
