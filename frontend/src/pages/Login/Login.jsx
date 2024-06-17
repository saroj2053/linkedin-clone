import React, { useState } from "react";

import "./Login.css";
import { Link } from "react-router-dom";

import linkedinLogo from "../../assets/linkedin-logo.svg";
import GoogleIcon from "../../assets/google-icon.svg";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { loading, login } = useLogin();

  const loginHandler = async (evt) => {
    evt.preventDefault();
    console.log(formData);
    const isSuccess = await login(formData);
    if (isSuccess) setFormData({ email: "", password: "" });
  };

  return (
    <div className="login">
      <img style={{ width: "100px" }} src={linkedinLogo} alt="" />
      <div className="content-center">
        <div className="login__card--layout">
          <h2 className="login__heading">Sign in</h2>
          <p>Stay updated on your professional world</p>
          <form action="" className="login__form" onSubmit={loginHandler}>
            <div className="form__input--floating mt-24">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={(evt) =>
                  setFormData({ ...formData, email: evt.target.value })
                }
              />
              <label htmlFor="email" className="form__label--floating">
                Email
              </label>
            </div>
            <div className="form__input--floating mt-24">
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={(evt) =>
                  setFormData({ ...formData, password: evt.target.value })
                }
              />
              <label htmlFor="password" className="form__label--floating">
                Password
              </label>
            </div>
            <input
              type="button"
              className="btn sign-in__btn"
              value={loading ? "Signing in..." : "Sign in"}
              disabled={loading}
              onClick={loginHandler}
            />
          </form>
          <div className="alternate-signin-container">
            <div
              id="or-separator"
              className="or-separator mt-12 snapple-seperator"
            >
              <span className="or-text">or</span>
            </div>
            <div className="alternate-signin__btn--google mt-12">
              <div className="google__image">
                <img src={GoogleIcon} alt="google logo" />
              </div>
              <p>Continue with Google</p>
            </div>
          </div>
          <p className="text-center mt-24">
            New to LinkedIn?{" "}
            <span>
              <Link className="redirect__register" to="/signup">
                Join Now
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
