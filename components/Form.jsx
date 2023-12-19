import { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "../store/pStore";

const Form = () => {
  const postIdElement = useRef("");
  const userNameElement = useRef("");
  const titleElement = useRef("");
  const bodyElement = useRef("");
  const reactionElement = useRef("");
  const tagElement = useRef("");

  const c_obj = useContext(PostContext);

  const onClickHandler = (event) => {
    event.preventDefault();

    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagElement.current.value.split(" ");
    const userid = userNameElement.current.value;

    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";
    userNameElement.current.value = "";

    // Now you can use newObj or pass it to your addPost function

    c_obj.addPost(title, body, reaction, tags, userid);
  };

  return (
    <form className="formCls">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Enter Your userID Here
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          ref={userNameElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Enter Post Title Here
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          ref={titleElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Tell us more about it
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          id="body"
          ref={bodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reaction on this Post
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter the Tags / HashTags Here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagElement}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={(event) => onClickHandler(event)}
      >
        Post
      </button>
    </form>
  );
};
export default Form;
