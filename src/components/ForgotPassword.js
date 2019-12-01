import React from "react";


export class Forgotpassword extends React.Component {
  render() {
    return (
      <div className="forgotpassword">
        <div class="forgot-password-form">
          <form
            id="forgotpassword-form"
            name="forgottenPwdForm"
            novalidate="true"
            data-component="OForm"
            class="o-form ng-pristine ng-valid"
            action="/en_gbp/password/requestSignIn"
            method="post"
            data-component-id="533c7457-f26d-4d7e-9971-06cac0b308ce"
          >
            <h2 class="a-heading-2">CAN'T REMEMBER YOUR PASSWORD?</h2>
            <label class="a-label js-a-label data">
              Tell us your email address and we'll send you a link to reset your
              password.
            </label>
            <div
              data-component="MInput"
              class="m-input "
              data-validate=""
              placeholder=""
              data-component-id="acce746f-5d09-4517-92b2-2653744a3d45"
            >
              <label class="a-label js-a-label"></label>
              <label class="a-label js-a-label" data-placeholder="E-mail">
                E-mail
              </label>
              <input
                class="a-input js-a-input"
                type="email"
                id="email"
                name="email"
                value=""
                required=""
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                placeholder=""
                data-validation-required-text="Please enter an email address"
                data-validation-pattern-text="Please enter a valid email"
              />
              <label class="a-label js-a-label" data-placeholder="E-mail">
                E-mail
              </label>
            </div>

            <button
              type="submit"
              id="forgottenButton"
              class="a-button is-primary"
            >
              <span>Submit</span>
            </button>
            <div>
              <input
                type="hidden"
                name="CSRFToken"
                value="5d0c24c6-13a7-4db7-aeb1-72537077176e"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
