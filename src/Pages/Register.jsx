import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Register = () => {
  const { createUser, setUser ,updateUser} = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name Should be more than 5 character");
      return;
    }
    else{
      setNameError(" ")
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({displayName: name ,photoURL : photo})
        .then(() => {
          setUser({...user,displayName: name ,photoURL : photo});
          // console.log(user);
          navigate("/");
        })
        .catch((error) => {
          //zodi photoURL r display name error hoy tahole normally user set korbe
          setUser(user);
          navigate("/");
          console.log("Error while signing up user",error);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 py-5 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URL*/}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold pt-5 text-center">
              Already have an Account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
