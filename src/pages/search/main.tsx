import { ChangeEventHandler, ReactElement, useCallback, useState } from "react";
import debounce from "lodash/debounce";

import { SearchBar, SearchResults } from "../../components";

const SEARCH_DEBOUNCE_MS = 150;

export default function SearchPage(): ReactElement {
  const [searchText, setSearchText] = useState("");

  // This is just ESLint struggling with the fact that we've used debounce to construct the callback
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetSearchText = useCallback(
    debounce((value: string) => setSearchText(value), SEARCH_DEBOUNCE_MS),
    [setSearchText]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      debouncedSetSearchText(event.target.value);
    },
    [debouncedSetSearchText]
  );

  return (
    <div className="container is-max-desktop">
      <SearchBar onChange={handleChange} />
      <SearchResults searchText={searchText} />
    </div>
  );
}
