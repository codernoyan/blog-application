import { fetchBlogs } from "../../features/blogs/blogsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../post/Post";
import Loading from "../loading/Loading";

export default function PostsGrid() {
  const { isLoading, isError, blogs, error } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch]);

  let blogContent;

  if (isLoading) blogContent = <Loading />

  if (!isLoading && isError) {
    blogContent = (
      <div>
        <h2 className="text-2xl font-semibold">{error}</h2>
      </div>
    )
  };

  if (!isLoading && !isError && blogs?.length === 0) {
    blogContent = (
      <div>
        <h2 className="text-2xl font-semibold">No posts found</h2>
      </div>
    )
  };

  if (!isLoading && !isError && blogs?.length > 0) {
    blogContent = blogs?.map((blog) => <Post key={blog.id} blog={blog} />)
  }


  return (
    <main className="post-container" id="lws-postContainer">
      {/* single post */}
      {blogContent}
      {/* Single Post Ends */}
    </main>
  )
}