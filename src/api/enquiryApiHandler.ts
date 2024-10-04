import securedApi from '../securedApi';
const CREATE_ENQUIRY='/createEnquiry';
export const EnquiryApiHandler = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateEnquiry: builder.mutation({
            query: (createEnquiry) => ({
              url: CREATE_ENQUIRY, 
              method: 'POST',
              body: createEnquiry,
            }),
          }),
    }),
  })
  
  export const { useCreateEnquiryMutation} = EnquiryApiHandler;