import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shopwareApiHeaders = {
  "sw-access-key": "SWSCJYMTKSVOT9UPMH2SGI-AZW",
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const baseUrl = "https://tuning-city.ddev.site/store-api";

const createRequest = (url: string) => ({ url, headers: shopwareApiHeaders });

export const shopwareApi = createApi({
  reducerPath: "shopwareApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNavigation: builder.query({
      query: (type) => createRequest(`/navigation/${type}/${type}`),
    }),
    getPage: builder.query({
      query: (pageId) => createRequest(`/cms/${pageId}`),
    }),
  }),
});

export const {
  useGetNavigationQuery,
  useGetPageQuery,
} = shopwareApi;

