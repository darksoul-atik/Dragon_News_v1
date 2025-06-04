import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Logged out successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() => {
        alert("Some Error caused you not logging out, Try Again");
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div className="text-secondary bg-primary">
        <span className="btn btn-primary text-secondary">
          View as {user ? user.email || user.displayName : "Guest"}
        </span>
      </div>

      <div className="nav text-accent flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-12  rounded-full"
          src={user?.photoURL || userIcon}
          alt="User Profile"
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {user ? (
          <button onClick={handleLogout} className="btn px-10 btn-primary">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn px-10 btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
