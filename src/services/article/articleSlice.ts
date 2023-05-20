import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import articleService from './articleService';
import { ArticleType } from '../../components/Summarizer';

//Error interface
interface ErrorWithResponse extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const initialState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Add New Article
export const addArticle = createAsyncThunk(
  'article/addArticle',
  async (article: ArticleType, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.addArticle(article, token);
    } catch (error) {
      const err = error as ErrorWithResponse;
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

//Get Users Articles
export const getArticles = createAsyncThunk(
  'article/getArticles',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.getArticles(token);
    } catch (error) {
      const err = error as ErrorWithResponse;
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Add article reducers
      .addCase(addArticle.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = '';
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articles.push(action.payload);
      })
      .addCase(addArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get articles reducers
      .addCase(getArticles.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = '';
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });

    // Reset reducers
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
