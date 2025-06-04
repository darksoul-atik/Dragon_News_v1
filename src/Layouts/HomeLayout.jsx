import React from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  // IMPORTANT FOR LOADING
  const data = useLoaderData();
  const {state} = useNavigation();
  return (
    <div>
      

      {/* Nav and Header */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews data={data}></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-3 gap-5 grid grid-cols-12">
        {/* Left Aside */}
        <aside className="sticky top-2 h-fit col-span-3">
          <LeftAside></LeftAside>
        </aside>

        {/* Main Body */}
        <section className="main col-span-6 ">

          {/* IMPORTANT FOR LOADING  */}
         {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}

        </section>

        {/* Right Aside */}
         <aside className="sticky top-2 h-fit col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
