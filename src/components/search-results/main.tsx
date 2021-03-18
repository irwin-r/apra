import { useLazyQuery } from "@apollo/client";
import { useDebounce } from "react-use";
import { ReactElement } from "react";

import {
  Error,
  Loading,
  NoResultsFound,
  NotCalledYet,
} from "../non-ideal-states";
import { SEARCH_PHOTOS_QUERY } from "./queries";
import { SearchResultsProps } from "./types";
import { SearchResultsHeader } from "../search-results-header";
import { SearchResult, SearchResultProps } from "../search-result";

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

  if (!called || searchText === "") {
    return <NotCalledYet />;
  }

  const photos: SearchResultProps[] = data?.photos?.data ?? [];

  if (photos.length === 0) {
    return <NoResultsFound />;
  }

  return (
    <main>
      <table className="table is-fullwidth">
        <SearchResultsHeader />
        <tbody>
          {photos.map(({ id, thumbnailUrl, title, url }) => (
            <SearchResult
              id={id}
              key={`photo-${id}`}
              thumbnailUrl={thumbnailUrl}
              title={title}
              url={url}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
