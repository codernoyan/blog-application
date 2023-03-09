import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./blogAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blog: {},
  error: '',
};

// fetch all blogs
export const fetchBlog = createAsyncThunk('blogs/fetchBlog', async (postId) => {
  const blog = await getBlog(postId);
  return blog;
})

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
        state.error = '';
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      })
  }
});

export default blogSlice.reducer;