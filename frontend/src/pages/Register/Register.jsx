import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import linkedinLogo from "../../assets/linkedin-logo.svg";
import GoogleIcon from "../../assets/google-icon.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupHandler = (evt) => {
    console.log(evt);
    evt.preventDefault();
    console.log(formData);
  };
  return (
    <div className="register">
      <img style={{ width: "100px" }} src={linkedinLogo} alt="" />
      <div className="content-center">
        <div className="register-card__layout">
          <h2 className="register__heading text-center">
            Make the most of your professional life
          </h2>
          <form action="" className="register__form" onSubmit={signupHandler}>
            <div className="form__input mt-24">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(evt) =>
                  setFormData({ ...formData, name: evt.target.value })
                }
              />
            </div>
            <div className="form__input mt-24">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(evt) =>
                  setFormData({ ...formData, email: evt.target.value })
                }
              />
            </div>
            <div className="form__input mt-24">
              <label htmlFor="password">Password (6+ characters)</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(evt) =>
                  setFormData({ ...formData, password: evt.target.value })
                }
              />
            </div>
            <small className="text-center mt-12">
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <span style={{ color: "#004182" }}>User Agreement</span>,{" "}
              <span style={{ color: "#004182" }}>Privacy Policy</span> and{" "}
              <span style={{ color: "#004182" }}>Cookie Policy</span>
            </small>
            <input
              type="button"
              className="btn"
              value="Agree & Join"
              onClick={signupHandler}
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
            Already on LinkedIn?{" "}
            <span>
              <Link className="redirect__login" to="/">
                Sign In
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
