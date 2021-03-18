import React, { ReactElement } from "react";

export default function SearchPage(): ReactElement {
  return (
    <div className="container is-max-desktop">
      <header className="App-header">
        <input
          className="input is-primary"
          type="text"
          placeholder="Primary input"
        />
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
