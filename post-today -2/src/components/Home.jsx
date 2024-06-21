import { useContext } from "react";

import { MdDeleteOutline } from "react-icons/md";
import { postList } from "../../store/PostlistProvider";

const Home = ({ post }) => {
  const { delPost } = useContext(postList);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => delPost(post.id)}
        >
          <MdDeleteOutline />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary tag">
            {tags}
          </span>
        ))}

        <div className="alert alert-info view" role="alert">
          people viewed your post {post.views}
        </div>
      </div>
    </div>
  );
};
export default Home;
