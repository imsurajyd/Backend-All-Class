// ==========================================
// React Routing Configuration
// ==========================================
//
// This file defines all frontend routes
// using React Router DOM.
//
// Available Routes:
//
// /feed
// - Displays all blog posts.
//
// /create-post
// - Provides a form to create a new blog post.
//
// Technologies Used:
// - React Router DOM
//
// Routing Components:
// - BrowserRouter
// - Routes
// - Route

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "../pages/Feed";
import CreatePost from "../pages/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Feed Page */}
        <Route path="/feed" element={<Feed />} />

        {/* Create Post Page */}
        <Route path="/create-post" element={<CreatePost />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
