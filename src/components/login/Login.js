import React from "react";

export default function Login() {
  return (
    <section className="login">
      <section className="login__title">Login</section>
      <section className="login__user">
        User :<input type="text"></input>
      </section>
      <section className="login__pass">
        Password :<input type="Password"></input>
      </section>
      <section className="login__buttons">
        <button>Send</button>
      </section>
    </section>
  );
}
