import Navigate from "../components/navigate/Navigate";
import PostDetail from "../components/postDetail/PostDetail";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";

export default function PostDetails() {
  return (
    <>
      <Navigate />
      <section className="post-page-container">
        {/* detailed post  */}
        <PostDetail />
        {/* detailed post ends */}
        {/* related posts */}
        <RelatedPosts />
        {/* related posts ends */}
      </section>
    </>
  )
}