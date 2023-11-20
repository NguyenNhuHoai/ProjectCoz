import React from "react";

const BlogCard = ({ Img }) => {
  return (
    <>
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
        <div className=" overflow-hidden ">
          <img
            src={Img}
            alt="No image"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>April 22, 204</p>
          <p className="line-clamp-1">By some</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            repellat, reiciendis ipsam placeat illum quam, labore et sapiente
            doloremque sit suscipit, obcaecati praesentium illo laboriosam error
            asperiores. Magni, veniam quisquam!
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
