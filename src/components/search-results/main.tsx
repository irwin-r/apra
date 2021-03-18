import { useLazyQuery } from "@apollo/client";

import { useDebounce } from "react-use";
import { ReactElement } from "react";
import { SEARCH_PHOTOS_QUERY } from "./queries";
import { SearchResultsProps } from "./types";
import Error from "../non-ideal-states/error";
import { Loading, NoResultsFound, NotCalledYet } from "../non-ideal-states";

export default function SearchResults({
  searchText,
}: SearchResultsProps): ReactElement {
  const [searchPhotos, { called, data, error, loading }] = useLazyQuery(
    SEARCH_PHOTOS_QUERY
  );

  useDebounce(
    () => {
      if (searchText !== "") {
        searchPhotos({ variables: { query: searchText } });
      }
    },
    150,
    [searchText]
  );

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }
  //
  if (!called || searchText === "") {
    return <NotCalledYet />;
  }

  if (data.photos.data.length === 0) {
    return <NoResultsFound />;
  }

  return <div>{JSON.stringify(data)}</div>;
}
