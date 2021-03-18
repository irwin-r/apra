import { forwardRef, ForwardedRef, ReactElement } from "react";
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
      <div className="mt-4 mb-4">
        <input
          className="input is-primary"
          placeholder={placeholder}
          ref={ref}
          type={type}
          {...props}
        />
      </div>
    );
  }
);
