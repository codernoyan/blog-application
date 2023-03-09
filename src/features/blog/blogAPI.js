import axios from '../../utils/axios';

export const getBlog = async (postId) => {
  const response = await axios.get(`/blogs/${postId}`);

  return response.data;
}