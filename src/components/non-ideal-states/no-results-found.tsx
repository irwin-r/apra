import { ReactElement } from "react";

export default function NoResultsFound(): ReactElement {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">We couldn&apos;t find anything? 🤔</p>
        <p className="subtitle">Try changing up your search terms</p>
      </div>
    </div>
  );
}
