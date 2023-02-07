import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Contact from "../pages/Contact.jsx";
import NoPage from "../pages/NoPage.jsx";
import Search from "../pages/Search.jsx";
import Article from "../pages/Article.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:articleID" element={<Article />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
