import axios from '../../utils/axios';

export const getBlog = async (postId) => {
  const response = await axios.get(`/blogs/${postId}`,);

  return response.data;
};

// update likes count
export const updateLike = async ({ likes, id }) => {
  console.log(id, likes)
  const response = await axios.patch(`/blogs/${id}`, { likes: likes + 1 }, {
    headers: {
      'content-type': 'application/json; chartset=UTF-8'
    },
  });
  return response.data;
};

export const updateSaveStatus = async ({ isSaved, id }) => {
  const response = await axios.patch(`/blogs/${id}`, { isSaved: !isSaved }, {
    headers: {
      'content-type': 'application/json; chartset=UTF-8'
    },
  });
  return response.data;
};