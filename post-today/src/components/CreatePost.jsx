import { useContext, useRef } from "react";
import { postList } from "../../store/PostlistProvider";
const CreatePost = () => {
  const { addPost } = useContext(postList);
  const userTitle = useRef();
  const userBody = useRef();
  const userTags = useRef();
  const userReactions = useRef();
  const userViews = useRef();
  const userIdElement = useRef();

  const handlePostSubmit = (event) => {
    const title = userTitle.current.value;
    const body = userBody.current.value;
    const tags = userTags.current.value.split(" ");
    const reactions = userReactions.current.value;
    const views = userViews.current.value;
    const userId = userIdElement.current.value;
    addPost(title, body, tags, reactions, views, userId);
  };
  return (
    <form className="create-post" onSubmit={handlePostSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="how  your feeling today..."
          ref={userTitle}
        />
        <div id="title" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label for="body" className="form-label">
          body
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          rows="4"
          placeholder="tell yous about it"
          ref={userBody}
        />
      </div>

      <div className="mb-3">
        <label for="tags" className="form-label">
          tags
        </label>
        <input type="text" className="form-control" id="tags" ref={userTags} />
      </div>

      <div className="mb-3">
        <label for="views" className="form-label">
          reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={userReactions}
        />
      </div>
      <div className="mb-3">
        <label for="views" className="form-label">
          views
        </label>
        <input
          type="text"
          className="form-control"
          id="views"
          ref={userViews}
        />
      </div>

      <div className="mb-3">
        <label for="userId" className="form-label">
          userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
