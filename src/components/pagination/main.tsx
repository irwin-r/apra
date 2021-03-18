import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { PaginationProps } from "./types";
import { getPages } from "./utils";

export default function Pagination({
  currentPage,
  setPage,
  totalPages,
}: PaginationProps): ReactElement {
  return (
    <nav className="is-pulled-right" role="navigation" aria-label="pagination">
      <div className="field has-addons">
        <p className="control">
          <button
            className="button"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            type="button"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          </button>
        </p>
        {getPages(currentPage, totalPages).map((page) => (
          <p className="control">
            <button
              className={`button${page === currentPage ? " is-primary" : ""}`}
              onClick={() => setPage(page)}
              type="button"
            >
              <span>{page}</span>
            </button>
          </p>
        ))}
        <p className="control">
          <button
            className="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
            type="button"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </p>
      </div>
    </nav>
  );
}
