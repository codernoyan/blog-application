import { Link } from "react-router-dom";

export default function RelatedBlog({ blog }) {

  const { id, title, image, tags, createdAt } = blog || {};

  return (
    <div className="card">
      <Link to={`/post/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link href="post.html" className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
          {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          {tags && `#${tags.join(', #')}`}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}