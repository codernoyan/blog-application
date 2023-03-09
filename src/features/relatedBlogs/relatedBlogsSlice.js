import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  error: '',
};

// fetch all blogs
export const fetchRelatedBlogs = createAsyncThunk('blogs/fetchRelatedBlogs', async ({ tags, id }) => {
  const blogs = await getRelatedBlogs({ tags, id });
  return blogs;
});

const relatedBlogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
        state.error = '';
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error?.message;
      })
  }
});

export default relatedBlogsSlice.reducer;