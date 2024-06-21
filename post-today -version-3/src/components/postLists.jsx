import Home from "./Home";
import { postList } from "../../store/PostlistProvider";
import { useContext } from "react";
import Welcome from "./Welcome";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const pList = useLoaderData();
  return (
    <>
      {pList.length === 0 && <Welcome />}
      {pList.map((post) => (
        <Home key={post.key} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
