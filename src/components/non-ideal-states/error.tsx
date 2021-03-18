import { ReactElement } from "react";
import { ErrorProps } from "./types";

export default function Error({ error }: ErrorProps): ReactElement {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">Something went wrong 😞</p>
        <p className="subtitle">
          {error?.message ? <code>{error.message}</code> : "Try again later?"}
        </p>
      </div>
    </div>
  );
}
