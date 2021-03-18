import { ReactElement } from "react";

export default function SearchResultsHeader(): ReactElement {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Thumbnail</th>
      </tr>
    </thead>
  );
}
