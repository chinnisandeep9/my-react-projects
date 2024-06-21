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
  } else if (action.type === "Add-Post") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [pList, dispatchPostList] = useReducer(
    postlistReducer,
    DefaultPostList
  );
  const addPost = (title, body, tags, reactions, views, userId) => {
    dispatchPostList({
      type: "Add-Post",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        tags: tags,
        reactions: reactions,
        views: views,
        userId: userId,
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

const DefaultPostList = [
  {
    id: "1",
    title: "this is to remember",
    body: "this is to remember that tomarrow is dad's birthday ",
    tags: ["AdvanceHappyBirthday", "MyBestWishes"],
    reactions: { likes: "127", dislikes: "0" },
    views: "24",
    userId: "701",
  },
  {
    id: "2",
    title: "last day of college",
    body: "today is the last day of my college ",
    tags: ["sosad", "BestWishes"],
    reactions: { likes: "1273", dislikes: "0" },
    views: "3000",
    userId: "201",
  },
];

export default PostListProvider;
