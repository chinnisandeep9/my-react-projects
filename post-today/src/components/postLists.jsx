import Home from "./Home";
import { postList } from "../../store/PostlistProvider";
import { useContext } from "react";
const PostList = () => {
  const { pList } = useContext(postList);
  console.log(pList);
  return (
    <>
      {pList.map((post) => (
        <Home key={post.key} post={post} />
      ))}
    </>
  );
};
export default PostList;
