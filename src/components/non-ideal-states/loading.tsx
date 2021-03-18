import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Loading(): ReactElement {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">
          <FontAwesomeIcon icon={faSearch} spin />
        </p>
      </div>
    </div>
  );
}
