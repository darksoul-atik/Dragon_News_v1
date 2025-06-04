import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({data}) => {

  const breakingNews = data.filter(news => news.category_id===2)

  console.log(breakingNews);
  
  return (
    <div className="flex items-center rounded gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-10" speed={70} pauseOnHover={true}>
        {/* <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eius.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eius.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eius.
        </p> */}

        {breakingNews.map(news => <p className="" key={news.id}>
          <span className="mx-5 text-secondary">|{" "}{news.title}{" "}|</span>
          </p>)}
      </Marquee>
    </div>
  );
};

export default LatestNews;
