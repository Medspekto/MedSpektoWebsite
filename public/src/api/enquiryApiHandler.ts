import securedApi from '../securedApi';
const CREATE_ENQUIRY='/createEnquiry';
export const EnquiryApiHandler = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateEnquiry: builder.mutation({
            query: (addLogin) => ({
              url: CREATE_ENQUIRY, 
              method: 'POST',
              body: addLogin,
            }),
          }),
         
    }),
  })
  
  export const { useCreateEnquiryMutation } = EnquiryApiHandler;