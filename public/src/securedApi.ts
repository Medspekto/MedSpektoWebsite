import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const securedApi = createApi({
    reducerPath: 'securedApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8080/api',
    }),
    endpoints: () => ({
      // Define your endpoints here
    }),
  });
  
  export default securedApi;