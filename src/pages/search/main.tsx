import { ChangeEventHandler, ReactElement, useCallback, useState } from "react";
import { SearchBar, SearchResults } from "../../components";

export default function SearchPage(): ReactElement {
  const [searchText, setSearchText] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  return (
    <div className="container is-max-desktop">
      <SearchBar onChange={handleChange} value={searchText} />
      <SearchResults searchText={searchText} />
    </div>
  );
}
