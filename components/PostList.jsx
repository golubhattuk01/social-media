import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../store/pStore";
import Welcome from "./Welcome";
import Loading from "./Loading";

const PostList = () => {
  let { postList, addInitialPost } = useContext(PostContext);
  const [fatching, setFatching] = useState(false);

  useEffect(() => {
    setFatching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFatching(false);
      });
  }, []);

  return (
    <>
      {fatching && <Loading />}
      {postList.length === 0 && <Welcome></Welcome>}
      {postList.map((post) => (
        <Post item={post} key={post.id}></Post>
      ))}
    </>
  );
};

export default PostList;
