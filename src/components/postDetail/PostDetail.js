import { increaseLike, increaseLikeCount, toggleSave, toggleSaveToDB } from "../../features/blog/blogSlice";
import { useDispatch } from "react-redux";

export default function PostDetail({ blog }) {
  const { id, title, description, image, tags, likes, isSaved } = blog || {};

  const dispatch = useDispatch()

  const handleIncreaseLike = (id, likes) => {
    dispatch(increaseLikeCount({ likes, id }))
      .then((info) => {
        dispatch(increaseLike(info.payload.id));
      })
  };

  const handleToggleSave = (id, isSaved) => {
    dispatch(toggleSaveToDB({ isSaved, id }))
      .then((info) => {
        dispatch(toggleSave(info.payload.id));
    })
  }

  return (
    <main className="post">
      <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags && (<span>{`#${tags.join(', #')}`}</span>)}
        </div>
        <div className="btn-group">
          {/* handle like on button click */}
          <button onClick={() => handleIncreaseLike(id, likes)} className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up" /> {likes}
          </button>
          {/* handle save on button click */}
          {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
          <button onClick={() => handleToggleSave(id, isSaved)} className={`${isSaved && 'active'} save-btn`} id="lws-singleSavedBtn">
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