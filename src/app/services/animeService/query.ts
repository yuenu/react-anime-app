import gql from "graphql-tag";

export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $page) {
      media {
        id
        description
        title {
          english
          
        }
        coverImage {
          medium
        }
      }
    }
  }
`