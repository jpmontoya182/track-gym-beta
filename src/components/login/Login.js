import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const onSubmit = data => {
    console.log(data);
    history.push("/home");
  };
  // console.log(watch("userInput")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="wrapper__login" data-test="login-component">
        <section className="login">
          <section className="login__user">
            <label>User : </label>
            <input
              name="userInput"
              id="userInput"
              ref={register({ required: true, maxLength: 100 })}
              autoComplete="off"
            />
            {errors.userInput && (
              <p className="alert">User is a required field</p>
            )}
          </section>
          <section className="login__pass">
            <label>Password : </label>
            <input
              type="Password"
              name="passwordInput"
              ref={register({ required: true, maxLength: 50 })}
            />
            {errors.passwordInput && (
              <p className="alert">Password is a required field</p>
            )}
          </section>
          <input type="submit" />
        </section>
      </section>
    </form>
  );
}
