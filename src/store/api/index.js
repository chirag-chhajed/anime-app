import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: (queryArg) => ({
        url: `/top/anime?page=${queryArg.page}`,
      }),
      serializeQueryArgs: ({ page }) => page,
      transformResponse: (response) => response.data,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getAnimeFullById: builder.query({
      query: (queryArg) => ({ url: `/anime/${queryArg.id}/full` }),
      transformResponse: (response) => response.data,
    }),
    searchAnime: builder.query({
      query: (queryArg) => ({ url: `/anime?q=${queryArg.query}&sfw` }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetAnimeFullByIdQuery,
  useSearchAnimeQuery,
} = api;
