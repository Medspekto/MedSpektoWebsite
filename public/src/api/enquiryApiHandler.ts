import securedApi from '../securedApi';
const CREATE_ENQUIRY='/createEnquiry';
const GET_ORGANIZATION='/Organization';
export const EnquiryApiHandler = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateEnquiry: builder.mutation({
            query: (addLogin) => ({
              url: CREATE_ENQUIRY, 
              method: 'POST',
              body: addLogin,
            }),
          }),
          GetOrganization:builder.query({
            query:()=>
                GET_ORGANIZATION
          })
         
    }),
  })
  
  export const { useCreateEnquiryMutation, useGetOrganizationQuery} = EnquiryApiHandler;