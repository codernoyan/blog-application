import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, updateLike, updateSaveStatus } from "./blogAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blog: {},
  error: '',
};

// fetch all blogs
export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (postId) => {
  const blog = await getBlog(postId);
  return blog;
});

export const increaseLikeCount = createAsyncThunk('blog/increaseLike', async ({ likes, id }) => {
  const likesCount = await updateLike({ likes, id });
  return likesCount;
});

export const toggleSaveToDB = createAsyncThunk('blog/increaseLike', async ({ isSaved, id }) => {
  const likesCount = await updateSaveStatus({ isSaved, id });
  return likesCount;
})

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    increaseLike: (state, action) => {
      if (state.blog.id === action.payload) {
        state.blog.likes++;
      }
    },
    toggleSave: (state, action) => {
      if (state.blog.id === action.payload) {
        state.blog.isSaved = !state.blog.isSaved;
      }
    }
  },
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
      });
  }
});

export default blogSlice.reducer;
export const { increaseLike, toggleSave } = blogSlice.actions;