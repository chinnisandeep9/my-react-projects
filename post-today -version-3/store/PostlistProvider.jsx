import { createContext, useReducer } from "react";
export const postList = createContext({
  pList: [],
  addPost: () => {},

  delPost: () => {},
});

const postlistReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "Delete-Post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add-All-Posts") {
    newPostList = action.payload.posts;
  } else if (action.type === "Add-Post") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [pList, dispatchPostList] = useReducer(postlistReducer, []);
  const addPost = (post) => {
    dispatchPostList({
      type: "Add-Post",
      payload: post,
    });
  };

  const addAllPosts = (posts) => {
    dispatchPostList({
      type: "Add-All-Posts",
      payload: {
        posts: posts,
      },
    });
  };

  const delPost = (postId) => {
    dispatchPostList({
      type: "Delete-Post",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <postList.Provider value={{ pList, addPost, delPost }}>
      {children}
    </postList.Provider>
  );
};

export default PostListProvider;

//{
//const DefaultPostList = [
//{
//id: "1",
//title: "this is to remember",
// body: "this is to remember that tomarrow is dad's birthday ",
//tags: ["AdvanceHappyBirthday", "MyBestWishes"],

//views: "24",
//userId: "701",
//},
// {
// id: "2",
//title: "last day of college",
//body: "today is the last day of my college ",
//tags: ["sosad", "BestWishes"],

//views: "3000",
//userId: "201",
//},
//];

//}
