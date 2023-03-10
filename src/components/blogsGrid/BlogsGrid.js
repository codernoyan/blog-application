import { fetchBlogs } from "../../features/blogs/blogsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Blog from "../blog/Blog";

export default function BlogsGrid() {
  const { isLoading, isError, blogs, error } = useSelector((state) => state.blogs);
  const { sortTitle, filterTitle } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch]);


  const filterByRadioButton = (blog) => {
    switch (filterTitle) {
      case 'Saved':
        return blog.isSaved;
      case 'All':
        return true;
      default:
        return true;
    }
  }

  const sortByOptions = (a, b) => {
    switch (sortTitle) {
      case 'most_liked':
        return b.likes - a.likes;
      case 'newest':
        return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));
      case '':
        return true;
      default:
        return true;
    }
  }

  // fetch with error handling
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
      blogs
        .filter(filterByRadioButton)
        .sort(sortByOptions)
        .map((blog) => <Blog key={blog.id} blog={blog} />)
    )
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {/* single post */}
      {blogContent}
      {/* Single Post Ends */}
    </main>
  )
}