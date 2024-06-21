import Home from "./Home";
import { postList } from "../../store/PostlistProvider";
import { useContext, useEffect } from "react";
import Welcome from "./Welcome";
const PostList = () => {
  const { pList, addAllPosts } = useContext(postList);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addAllPosts(data.posts);
      });
  }, []);

  return (
    <>
      {pList.length === 0 && <Welcome />}
      {pList.map((post) => (
        <Home key={post.key} post={post} />
      ))}
    </>
  );
};
export default PostList;
