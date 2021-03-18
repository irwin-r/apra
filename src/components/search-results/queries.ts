import { gql } from "@apollo/client";

export const SEARCH_PHOTOS_QUERY = gql`
  query searchPhotos($query: String!, $page: Int, $limit: Int) {
    photos(
      options: {
        paginate: { page: $page, limit: $limit }
        search: { q: $query }
      }
    ) {
      data {
        id
        thumbnailUrl
        title
        url
      }
      meta {
        totalCount
      }
    }
  }
`;
