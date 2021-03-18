import { ChangeEventHandler, ReactElement, useCallback, useState } from "react";
import { SearchBar } from "../../components";

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
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
