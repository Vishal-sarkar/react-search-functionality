import React from "react";
import Card from "./Card";

function BlogList({ blogs, onSearchClick }) {
  return (
    <>
      <h1 className="w-full text-center text-4xl text-teal my-8">
        <span className="font-bold">
          <span className="text-orange-600">Score</span>
          Me
        </span>
        Blogs
      </h1>

      <div className="flex justify-center">
      <div className="relative w-80">
        <input
          id="text"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-l-lg"
          type="search"
          placeholder="search blogs"
        />

        <button type="button" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onSearchClick}>
          Find
        </button>
      </div>
      </div>
      
      <div className="mt-4 md:w-4/5 md:px-8 px-4 mx-auto">
        <h3 className="text-2xl font-semibold">Must Reads...</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mx-auto mt-4">
          {blogs.map((blog, i) => {
            return (
              <Card
                key={i}
                slug={blogs[i].blogSlug}
                title={blogs[i].title}
                image={blogs[i].image}
                shortdesc={blogs[i].shortdesc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogList;
