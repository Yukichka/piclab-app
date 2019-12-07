import React from "react";
// import { FotgotPassword } from "./ForgotPassword";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
    this.switchToRegister = this.switchToRegister.bind(this);
    this.switchToSignIn = this.switchToSignIn.bind(this);
  }
  switchToSignIn() {
    console.log("signin clicked");
    this.setState({ isActive: true });
  }
  switchToRegister() {
    console.log("register clicked");
    this.setState({ isActive: false });
  }
  render() {
    return (
      <div className="register">
        <ul className="active-or-not">
          <li className="active-costomer" onClick={this.switchToSignIn}>
            Sign in
          </li>
          <li className="not-active-costomer" onClick={this.switchToRegister}>
            New customer
          </li>
        </ul>

        <div className="sign-in-field">
          {this.state.isActive ? (
            <form className="form" onsubmit="">
              <div>
                <label>Enter email</label>
                <input
                  className="input"
                  placeholder=""
                  type="email"
                  name="username"
                  id="username"
                  required=""
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />
              </div>
              <label>Enter password</label>
              <input
                placeholder=""
                className="input"
                type="password"
                name="j_password"
                id="j_password"
                required=""
                pattern="^[^ ]{5,25}$"
              />
              <div>
                <button type="submit" className="a-button">
                  <span>
                    <label>SIGN IN</label>
                  </span>
                </button>
              </div>

              <div className="link-to-forgot-password" onClick="">
                <a
                  href="https://www.cosstores.com/en_gbp/password/requestSignIn"
                  target="_self"
                  className="a-link forgot-password"
                >
                  Can't remember your password?
                </a>
              </div>
            </form>
          ) : (
            <div id="registration-form" className="content">
              <div className="registration empty-registration">
                <form className="form" onsubmit="">
                  <div className="o-registration-form">
                    <label className="a-label js-a-label" for="email">
                      Enter email
                    </label>
                    <input
                     className="input"
                      type="email"
                      name="email"
                      id="email"
                      required=""
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    />

                    <div
                      className="m-input password"
                      placeholder="Password"
                      id="password"
                    >
                      <label className="a-label js-a-label" for="pwd">
                        Enter password
                      </label>
                      <input
                        placeholder=""
                        className="input"
                        type="password"
                        name="pwd"
                        id="pwd"
                        required=""
                        pattern="^\S*$"
                        maxlength="20"
                      />
                      <div className="help-text">
                        <span className="help-tip">
                          Minimum 6 characters
                        </span>
                      </div>
                    </div>
                    <div className="password-repeat" placeholder="">
                      <label className="a-label js-a-label" for="checkPwd">
                        Please confirm your new password
                      </label>
                      <input
                        placeholder=""
                        className="input"
                        type="password"
                        name="checkPwd"
                        id="checkPwd"
                        required=""
                        data-validation-required-text="Please confirm your new password"
                        data-validation-match-field-text="Passwords are not matching"
                      />
                    </div>

                    <div>
                      <div className="checkbox-input" id="newsletter">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="connected_newsletter"
                          name="hmNewsSubscription"
                        />
                        <label
                          className="a-label js-a-label custom-box"
                          for="connected_newsletter"
                          tabindex="0"
                        ></label>
                        <label
                          className="a-label js-a-label"
                          for="connected_newsletter"
                        >
                          <span className="newsLetterText">
                            I confirm that I am 16 years or older and I consent
                            to XXX processing my personal data in order to send
                            personalized marketing material in accordance with
                            the
                          </span>
                          <a
                            href=""
                            target="_blank"
                            className="a-link policiesLink"
                          >
                            privacy notice
                          </a>
                        </label>
                      </div>
                      <div
                        data-component="MInput"
                        className="m-checkbox u-clearfix is-filled"
                        id="policies"
                        data-component-id="9d96519f-65c3-4c11-8a74-e29d209e55ec"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="termsAndConditions"
                          id="connected_policies"
                          required=""
                          data-validation-required-text="Please consent to our privacy notice"
                        />
                        <label
                          className="a-label js-a-label custom-box"
                          for="connected_policies"
                          tabindex="0"
                        ></label>
                        <label
                          className="a-label js-a-label"
                          for="connected_policies"
                        >
                          <span className="policiesText is-richtext">
                            I consent to XXX using my personal data to manage my
                            personal account in accordance with the&nbsp;
                            <a
                              href=""
                              target="_blank"
                              className="a-link policiesLink"
                            >
                              privacy notice
                            </a>
                          </span>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="a-button is-primary">
                      <span>Create account</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
