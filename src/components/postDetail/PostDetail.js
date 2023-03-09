export default function PostDetail({ blog }) {
  const { id, title, description, image, tags, likes, isSaved, createdAt } = blog || {};
  return (
    <main className="post">
      <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {
            tags && tags?.map((tag, i) => <span key={i}> #{tag},</span>)
          }
        </div>
        <div className="btn-group">
          {/* handle like on button click */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up" /> {likes}
          </button>
          {/* handle save on button click */}
          {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
          <button className={`${isSaved && 'active'} save-btn`} id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark" /> {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  )
}