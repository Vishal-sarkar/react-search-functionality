import React from "react";
import { useParams } from "react-router-dom";

function Blog({ blogs }) {
  const { slug } = useParams();

  return (
    <>
      <div>
        {blogs.map((blog, i) => {
          if (slug == blogs[i].blogSlug) {
            return (
              <div className="container">
                <div class="mx-auto bg-gradient-to-r from-white via-slate-100 to-white">
                <div class="md:w-4/5 md:px-0 px-4 mx-auto mt-4">
                  <div class="grid grid-cols-1 md:grid-cols-5 md:gap-4 gap-y-4">
                    <div className="grid col-span-1 md:col-span-4 mb-auto">
                      <img
                        src={blogs[i].image}
                        alt="image"
                        className="rounded-2xl drop-shadow-xl w-full aspect-video"
                      />
                      <h1 className="text-2xl md:text-3xl font-bold py-4 text-orange-600">
                      {blogs[i].title}
                      </h1>
                      <span className="h-1 w-48 bg-teal mb-2"></span>
                      <span class="h-px w-full bg-slate-800 my-2"></span>
                      <p className="text-lg mb-auto" style={{color: "black"}}>{blogs[i].body_1}</p>
                      <span class="h-px w-full bg-slate-800 my-2"></span>
                      <p className="text-lg mb-auto" style={{color: "black"}}>{blogs[i].body_1}</p>
                      <span class="h-px w-full bg-slate-800 my-2"></span>
                      <p className="text-lg mb-auto" style={{color: "black"}}>{blogs[i].body_1}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
export default Blog;
