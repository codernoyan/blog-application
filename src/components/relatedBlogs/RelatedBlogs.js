import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RelatedBlog from "../relatedBlog/RelatedBlog";
import Loading from "../loading/Loading";

export default function RelatedBlogs({ blog }) {
  const { isLoading, isError, blogs, error } = useSelector((state) => state.relatedBlogs);
  const dispatch = useDispatch();
  const { id, tags } = blog || {};

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }))
  }, [dispatch, tags, id]);

  let blogContent;

  if (isLoading) blogContent = <Loading />

  if (!isLoading && isError) {
    blogContent = (
      <div>
        <h2 className="text-xl font-semibold">{error}</h2>
      </div>
    )
  };

  if (!isLoading && !isError && blogs?.length === 0) {
    blogContent = (
      <div>
        <h2 className="text-xl font-semibold">No posts found</h2>
      </div>
    )
  };

  if (!isLoading && !isError && blogs?.length > 0) {
    blogContent = (
      blogs.map((blog) => <RelatedBlog key={blog.id} blog={blog} />)
    )
  };

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {/* related post  */}
        {blogContent}
      </div>
    </aside>
  )
}