import React from "react";
import { Link } from "react-router-dom";

export class SignOut extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Sign-in" className="sign-out">
          Sign out
        </Link>
      </div>
    );
  }
}
