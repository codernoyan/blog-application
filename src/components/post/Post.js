import { Link } from "react-router-dom";

export default function Post({ blog }) {
  const { id, title, image, tags, likes, isSaved, createdAt } = blog || {};
  return (
    <div className="lws-card">
      <Link to={`/post/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up" />{likes}</p>
        </div>
        <Link to={`/post/${id}`} className="lws-postTitle">{title}</Link>
        <div className="lws-tags">
          {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          {
            tags && tags?.map((tag, i) => <span key={i}>#{tag}</span>)
          }
        </div>
        {/* Show this element if post is saved */}
        {
          isSaved && (
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          )
        }
        {/* Show this element if post is saved Ends */}
      </div>
    </div>
  )
}