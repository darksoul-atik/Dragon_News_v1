import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5 w-full  mx-auto">
        <img className=" mx-auto w-3/4 p-5" src={swimmingImage} alt="" />
        <img className=" mx-auto w-3/4 p-5" src={classImage} alt="" />
        <img className=" mx-auto w-3/4 p-5" src={playImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;