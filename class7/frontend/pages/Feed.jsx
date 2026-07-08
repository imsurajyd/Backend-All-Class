// ==========================================
// Feed Page
// ==========================================
//
// This page displays all blog posts.
//
// Features:
// - Fetch all posts from the backend.
// - Store posts using React state.
// - Display uploaded images.
// - Display post captions.
//
// Technologies Used:
// - React
// - Axios
// - useEffect()
// - useState()
//
// API Used:
// GET /posts
//
// Flow:
// Component Mount
//       │
//       ▼
// axios.get("/posts")
//       │
//       ▼
// Receive API Response
//       │
//       ▼
// Update State
//       │
//       ▼
// Render Posts

import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {
  // Store all blog posts
  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      });
  }, []);

  return (
    <section className="h-full w-screen bg-gray-300 flex flex-col items-center justify-top gap-3 py-2">
      <h1 className="text-4xl py-2">Post Feed</h1>

      <div className="w-150 flex flex-col items-center justify-center gap-5">

        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div
                key={post._id}
                className="w-fit bg-white p-3"
              >
                <img
                  src={post.image}
                  className="rounded-xl object-cover"
                />

                <p className="mt-2 text-black text-sm font-medium">
                  Caption :
                  <span className="text-gray-600">
                    {post.caption}
                  </span>
                </p>
              </div>
            );
          })
        ) : (
          <h1>No post available.</h1>
        )}

      </div>
    </section>
  );
};

export default Feed;
