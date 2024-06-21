import { useContext, useRef } from "react";
import { postList } from "../../store/PostlistProvider";
import { redirect, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
const CreatePost = () => {
  const { addPost } = useContext(postList);

  return (
    <Form method="post" className="create-post">
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
          name="title"
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
          name="body"
        />
      </div>

      <div className="mb-3">
        <label for="tags" className="form-label">
          tags
        </label>
        <input type="text" className="form-control" id="tags" name="tags" />
      </div>

      <div className="mb-3">
        <label for="views" className="form-label">
          views
        </label>
        <input type="text" className="form-control" id="views" name="views" />
      </div>

      <div className="mb-3">
        <label for="userId" className="form-label">
          userId
        </label>
        <input type="text" className="form-control" id="userId" name="userId" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
