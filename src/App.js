import React, { useState, useEffect } from "react";
import "./App.css";
import BlogList from "./components/BlogList";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState([]);
  const onSearchClick = () => {
    setSearchText(document.getElementById("text").value);
  };
  useEffect(() => {
    fetch(
      "https://investmentopportunities.resurgentindia.com/version-test/api/1.1/wf/search?search=" +
        searchText
    )
      .then((response) => response.json())
      .then((blog) => blog.response)
      .then((blog) => setBlogs(blog.blog));
  }, [searchText]);
  return (
    <>
    <Router>
        <Routes>
            <Route exact path='/' element={<BlogList blogs={blogs} onSearchClick={onSearchClick}/>}></Route>
            <Route exact path='/:slug' element={<Blog blogs={blogs}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
