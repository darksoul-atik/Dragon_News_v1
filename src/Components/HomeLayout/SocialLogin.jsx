import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";

const SocialLogin = () => {
  const { gitHubLogin, user, googleLogin } = use(AuthContext);

  const handleGitHubLogin = () => {
    gitHubLogin();
  };
  const handlegoogleLogin = () => {
    googleLogin();
  };

  return (
    <div className="">
      {user ? (
        <div className="bg-gray-100 px-6 py-5 rounded-xl shadow-md mb-6">
          <p className="text-sm md:text-xl font-light">
            Welcome to <span className="font-semibold">Dragon News</span>,
            <span className="font-bold ml-1">
              {user?.email || user?.displayName || "Guest"}
            </span>
            !
          </p>
          <p className="text-sm md:text-sm mt-2 text-gray-700">
            Stay informed with the latest headlines, exclusive reports, and
            in-depth articles curated just for you.
          </p>
          <p className="text-sm md:text-sm text-gray-700">
            We’re glad to have you here. Enjoy a personalized news experience
            tailored to your interests.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="font-bold mb-5">Login With </h2>
          <div className="space-y-3">
            <button
              onClick={handlegoogleLogin}
              className="btn btn-outline btn-secondary w-full"
            >
              {" "}
              <FaGoogle size={24} />
              Login with Google
            </button>

            <button
              onClick={handleGitHubLogin}
              className="btn btn-outline btn-primary w-full "
            >
              {" "}
              <FaGithub size={24} />
              Login with Github
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
