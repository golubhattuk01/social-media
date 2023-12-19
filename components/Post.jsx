import { useContext } from "react";
import "../src/App.css";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/pStore";
const Post = ({ item }) => {
  const obj = useContext(PostContext);
  return (
    <div className="card post_card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {item.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => obj.deletePost(item.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{item.body}.</p>
        {item.tags.map((myItem) => (
          <span className={`badge text-bg-primary tagcls`} key={myItem}>
            {myItem}
          </span>
        ))}
      </div>
      <div className="alert alert-primary" role="alert">
        This post has been reacted by {item.reaction} people
      </div>
    </div>
  );
};
export default Post;
