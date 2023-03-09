import Sidebar from "../components/navbar/Sidebar";
import PostsGrid from "../components/postsGrid/PostsGrid";

export default function Home() {
  return (
    <section className="wrapper">
      {/* sidebar */}
      <Sidebar/>
      {/* posts container  */}
      <PostsGrid/>
      {/* posts container ends */}
    </section>
  )
}