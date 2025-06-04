import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Not Found"
        className="w-52 h-52 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-secondery text-lg mb-6">
        We couldn’t find the page you were looking for. It might have been moved
        or deleted.
        <br />
      </p>
      <p>
        <span className="text-2xl mb-10">
          For Time Shortage, I did not create this page. Maybe in Future. Thank
          You
        </span>
        <br /> -{" "}
        <span className="text-xs font-extralight">Atik Shahrear Ananto</span> -{" "}
      </p>

      <Link
        to="/"
        className="px-6 mt-10 py-3 bg-seconary  text-secondary rounded-2xl shadow hover:bg-primary transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
