import axios from "axios"
import { useEffect, useState } from "react";
const Feed = () => {
  const [posts, setPosts] = useState([])

  // const posts = [
  //   {
  //     _id: 0,
  //     url: 'https://images.unsplash.com/photo-1779896412176-45c509bbee35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     caption: 'First captions',
  //     _v: 0,
  //   },
  //   {
  //     _id: 1,
  //     url: 'https://images.unsplash.com/photo-1758102776704-8389e082e035?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     caption: 'Second Captions',
  //     _v: 0,
  //   },
  //   {
  //     _id: 2,
  //     url:"https://images.unsplash.com/photo-1690192560051-e06e09db5d1a?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     caption: 'Third Captions',
  //     _v: 0
  //   }
  // ];

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
      console.log(res.data.posts);

    })
  },[])

  return (
    <section className="h-full w-screen bg-gray-300 flex flex-col items-center justify-top gap-3 py-2">
      <h1 className="text-4xl py-2">Post Feed</h1>
      <div className="w-150 flex flex-col items-center justify-center gap-5">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div key={post._id} className="w-fit bg-white p-3">
                <img src={post.image} className="rounded-xl object-cover" />

                <p className="mt-2 text-black text-sm font-medium">
                  Caption : <span className="text-gray-600">{post.caption}</span>
                </p>
              </div>
            );
          })
        ) : (
          <h1>No post Here</h1>
        )}
      </div>
    </section>
  );
};

export default Feed;
