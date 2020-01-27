import React from "react";

export default function Login() {
  return (
    <section className="wrapper__login" data-test="login-component">
      <section className="login">
        <section className="login__title">Login</section>
        <section className="login__user">
          <label>User :</label>
          <input type="text" />
        </section>
        <section className="login__pass">
          <label>Password</label>
          <input type="Password" />
        </section>
        <section className="login__buttons">
          <button>Send</button>
        </section>
      </section>
    </section>
  );
}
