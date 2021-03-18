import { forwardRef, ForwardedRef, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SearchBarProps } from "./types";

export default forwardRef(
  (
    {
      placeholder = "Search keywords on title",
      type = "search",
      ...props
    }: SearchBarProps,
    ref: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
    return (
      <div className="field pt-4">
        <p className="control has-icons-right">
          <input
            className="input is-primary"
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...props}
          />
          <span className="icon is-right">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>
    );
  }
);
