import React from "react";
import BlogCard from "../reusable/blog-card";

function BlogSection() {
  return (
    <div className="blog-section hidden md:flex flex-col gap-5 ">
      <h1 className="blog-highlight text-lg md:text-[22px] font-semibold ">
        {" "}
        Follow us on Instagram for News, Offers & More
      </h1>
      <div className="blog-card-lists flex gap-2 flex-wrap justify-center">
        {Array(9)
          .fill("_")
          .map((index) => (
            <BlogCard key={index} />
          ))}
      </div>
    </div>
  );
}

export default BlogSection;
