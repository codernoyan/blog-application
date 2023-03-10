import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogInfo from "../components/blogInfo/BlogInfo";
import Loading from "../components/loading/Loading";
import Navigate from "../components/navigate/Navigate";
import RelatedBlogs from "../components/relatedBlogs/RelatedBlogs";
import { fetchBlog } from "../features/blog/blogSlice";

export default function BlogDetails() {
  const { isLoading, isError, error, blog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  // get post id from react router
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId))
  }, [dispatch, blogId]);

  let blogContent;

  if (isLoading) blogContent = <Loading />

  if (!isLoading && isError) {
    blogContent = (
      <div>
        <h2 className="text-xl font-semibold">{error}</h2>
      </div>
    )
  };

  if (!isLoading && !isError && Object.keys(blog)?.length === 0) {
    blogContent = (
      <div>
        <h2 className="text-xl font-semibold">No post found</h2>
      </div>
    )
  };

  if (!isLoading && !isError && Object.keys(blog)?.length > 0) {
    blogContent = <BlogInfo blog={blog} />
  }

  return (
    <>
      <Navigate />
      <section className="post-page-container">
        {/* detailed post  */}
        {blogContent}
        {/* detailed post ends */}
        {/* related posts */}
        <RelatedBlogs blog={blog} />
        {/* related posts ends */}
      </section>
    </>
  )
}