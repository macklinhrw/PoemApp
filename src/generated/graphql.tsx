import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPoem?: Maybe<PoemClass>;
};


export type MutationCreatePoemArgs = {
  content: Scalars['String'];
  hasTitle: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  title: Scalars['String'];
};

export type PoemClass = {
  __typename?: 'PoemClass';
  content: Scalars['String'];
  hasTitle: Scalars['Boolean'];
  id: Scalars['String'];
  isDraft: Scalars['Boolean'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllPoems?: Maybe<Array<PoemClass>>;
  getPoem?: Maybe<PoemClass>;
};


export type QueryGetPoemArgs = {
  id: Scalars['String'];
};

export type FPoemFragment = { __typename?: 'PoemClass', title: string, content: string };

export type CreatePoemMutationVariables = Exact<{
  createPoemIsDraft: Scalars['Boolean'];
  createPoemContent: Scalars['String'];
  createPoemTitle: Scalars['String'];
  createPoemHasTitle: Scalars['Boolean'];
}>;


export type CreatePoemMutation = { __typename?: 'Mutation', createPoem?: Maybe<{ __typename?: 'PoemClass', title: string, content: string, isDraft: boolean, hasTitle: boolean }> };

export type GetAllPoemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPoemsQuery = { __typename?: 'Query', getAllPoems?: Maybe<Array<{ __typename?: 'PoemClass', title: string, content: string }>> };

export const FPoemFragmentDoc = gql`
    fragment fPoem on PoemClass {
  title
  content
}
    `;
export const CreatePoemDocument = gql`
    mutation createPoem($createPoemIsDraft: Boolean!, $createPoemContent: String!, $createPoemTitle: String!, $createPoemHasTitle: Boolean!) {
  createPoem(
    isDraft: $createPoemIsDraft
    content: $createPoemContent
    title: $createPoemTitle
    hasTitle: $createPoemHasTitle
  ) {
    title
    content
    isDraft
    hasTitle
  }
}
    `;
export type CreatePoemMutationFn = Apollo.MutationFunction<CreatePoemMutation, CreatePoemMutationVariables>;

/**
 * __useCreatePoemMutation__
 *
 * To run a mutation, you first call `useCreatePoemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePoemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPoemMutation, { data, loading, error }] = useCreatePoemMutation({
 *   variables: {
 *      createPoemIsDraft: // value for 'createPoemIsDraft'
 *      createPoemContent: // value for 'createPoemContent'
 *      createPoemTitle: // value for 'createPoemTitle'
 *      createPoemHasTitle: // value for 'createPoemHasTitle'
 *   },
 * });
 */
export function useCreatePoemMutation(baseOptions?: Apollo.MutationHookOptions<CreatePoemMutation, CreatePoemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePoemMutation, CreatePoemMutationVariables>(CreatePoemDocument, options);
      }
export type CreatePoemMutationHookResult = ReturnType<typeof useCreatePoemMutation>;
export type CreatePoemMutationResult = Apollo.MutationResult<CreatePoemMutation>;
export type CreatePoemMutationOptions = Apollo.BaseMutationOptions<CreatePoemMutation, CreatePoemMutationVariables>;
export const GetAllPoemsDocument = gql`
    query getAllPoems {
  getAllPoems {
    ...fPoem
  }
}
    ${FPoemFragmentDoc}`;

/**
 * __useGetAllPoemsQuery__
 *
 * To run a query within a React component, call `useGetAllPoemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPoemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPoemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPoemsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPoemsQuery, GetAllPoemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPoemsQuery, GetAllPoemsQueryVariables>(GetAllPoemsDocument, options);
      }
export function useGetAllPoemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPoemsQuery, GetAllPoemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPoemsQuery, GetAllPoemsQueryVariables>(GetAllPoemsDocument, options);
        }
export type GetAllPoemsQueryHookResult = ReturnType<typeof useGetAllPoemsQuery>;
export type GetAllPoemsLazyQueryHookResult = ReturnType<typeof useGetAllPoemsLazyQuery>;
export type GetAllPoemsQueryResult = Apollo.QueryResult<GetAllPoemsQuery, GetAllPoemsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    