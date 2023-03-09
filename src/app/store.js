import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import filtersReducer from '../features/filters/filtersSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    filters: filtersReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});
