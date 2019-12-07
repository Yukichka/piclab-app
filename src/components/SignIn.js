import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

// import { FotgotPassword } from "./ForgotPassword";

export class SignIn extends React.Component {
  state = { email: "", password: "" };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    console.log(this.props);
    return (
      <div className="sign-in">
        <Header />
        <ul className="active-or-not">
          <li className="active-user">
            <Link to="/Sign-in">Sign in</Link>
          </li>
          <li className="not-active-user">
            <Link to="/Registration">New</Link>
          </li>
        </ul>

        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Email"
                className="input"
                type="email"
                id="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <input
                placeholder="Password"
                type="password"
                id="password"
                pattern="^\S*$"
                maxLength="20"
                className="input"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button type="submit" className="submit">
                Go
              </button>
            </div>
          </form>
          {this.props.auth.authError ? (
            <div className="login-status">{this.props.auth.authError}</div>
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}
