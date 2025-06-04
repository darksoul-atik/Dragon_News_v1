import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Categories></Categories>
      </Suspense>

      {/* eikhane in between suspense use kora hoise ..!! */}
    </div>
  );
};

export default LeftAside;
