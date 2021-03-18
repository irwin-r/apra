import { useQuery } from "@apollo/client";
import { ReactElement, useLayoutEffect, useState } from "react";

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
import { Pagination } from "../pagination";

const RESULTS_PER_PAGE = 10;

export default function SearchResults({
  searchText,
}: SearchResultsProps): ReactElement {
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    setPage(1);
  }, [searchText]);

  const { data, error, loading } = useQuery(SEARCH_PHOTOS_QUERY, {
    skip: searchText === "",
    variables: {
      limit: RESULTS_PER_PAGE,
      page,
      query: searchText,
    },
  });

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (searchText === "") {
    return <NotCalledYet />;
  }

  const photos: SearchResultProps[] = data?.photos?.data ?? [];

  if (photos.length === 0) {
    return <NoResultsFound />;
  }

  return (
    <main className="content">
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
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={Math.ceil(data.photos.meta.totalCount / RESULTS_PER_PAGE)}
      />
    </main>
  );
}
