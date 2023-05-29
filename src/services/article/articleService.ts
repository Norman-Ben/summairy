import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_ARTICLE_HOST;
const API_URL = `${import.meta.env.VITE_API_URL}/api/summaries/`;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', rapidApiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// Add new article
const addArticle = async (article, token) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  };
  const response = await fetch(API_URL, config);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
};

//Get Users Articles
const getArticles = async (token) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(API_URL, config);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
};

// Delete user Article
const deleteArticle = async (articleId, token) => {
  const config = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${API_URL}/${articleId}`, config);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
};

const articleService = {
  addArticle,
  getArticles,
  deleteArticle,
};
export const { useLazyGetSummaryQuery } = articleApi;
export default articleService;
