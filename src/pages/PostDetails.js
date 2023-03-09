import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import Navigate from "../components/navigate/Navigate";
import PostDetail from "../components/postDetail/PostDetail";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";
import { fetchBlog } from "../features/blog/blogSlice";

export default function PostDetails() {
  const { isLoading, isError, error, blog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  // get post id from react router
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(postId))
  }, [dispatch, postId]);

  let blogContent;

  if (isLoading) blogContent = <Loading />

  if (!isLoading && isError) {
    blogContent = (
      <div>
        <h2 className="text-2xl font-semibold">{error}</h2>
      </div>
    )
  };

  if (!isLoading && !isError && Object.keys(blog)?.length === 0) {
    blogContent = (
      <div>
        <h2 className="text-2xl font-semibold">No post found</h2>
      </div>
    )
  };

  if (!isLoading && !isError && Object.keys(blog)?.length > 0) {
    blogContent = <PostDetail blog={blog} />
  }

  return (
    <>
      <Navigate />
      <section className="post-page-container">
        {/* detailed post  */}
        {blogContent}
        {/* detailed post ends */}
        {/* related posts */}
        <RelatedPosts blog={blog} />
        {/* related posts ends */}
      </section>
    </>
  )
}