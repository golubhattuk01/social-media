import { createContext, useReducer, useEffect } from "react";

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const ReducerFun = (currentState, action) => {
  let newState = currentState;
  if (action.type === "ADD_ITEM") {
    newState = [action.payload, ...currentState];
  } else if (action.type === "DELETE_ITEM") {
    newState = currentState.filter((item) => item.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_ITEM") {
    newState = action.payload.posts;
  }
  return newState;
};

// const ReducerFun = () => {};
const PostListProvider = ({ children }) => {
  // sample data
  // const SAMPLE_POST = [
  //   {
  //     id: "1",
  //     title: "Going To Home",
  //     body: "after a long time i will go to  my maternal home to meet my grand maa and papa",
  //     reaction: 2,
  //     tags: ["enjoy", "massti"],
  //     userid: "user-9",
  //   },
  //   {
  //     id: "2",
  //     title: "Learing React",
  //     body: "hello sagar badmas kya hal hai",
  //     reaction: 20,
  //     tags: ["coding", "cse"],
  //     userid: "user-90",
  //   },
  // ];

  // functioning
  const [postList, dispatchPostList] = useReducer(ReducerFun, []);

  const addPost = (title, body, reaction, tags, userid) => {
    const addAction = {
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reaction: reaction,
        tags: tags,
        userid: userid,
      },
    };
    dispatchPostList(addAction);
  };

  const deletePost = (postId) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        postId,
      },
    };
    dispatchPostList(deleteAction);
  };
  const addInitialPost = (posts) => {
    const initialAction = {
      type: "ADD_INITIAL_ITEM",
      payload: {
        posts,
      },
    };
    dispatchPostList(initialAction);
  };
  return (
    <PostContext.Provider
      value={{ postList, addPost, deletePost, addInitialPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostListProvider;
