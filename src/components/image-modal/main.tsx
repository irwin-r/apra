import { ReactElement, useLayoutEffect, useMemo, useRef } from "react";
import { useClickAway } from "react-use";
import { createPortal } from "react-dom";

import { ImageModalProps } from "./types";

export default function ImageModal({
  alt,
  onClose,
  src,
  visible,
}: ImageModalProps): ReactElement {
  const ref = useRef(null);
  const element = useMemo(() => document.createElement("div"), []);

  useLayoutEffect(() => {
    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) {
      throw new Error("Could not find modal root");
    }

    modalRoot.appendChild(element);

    return () => {
      element.remove();
    };
  }, [element]);

  useClickAway(ref, onClose);

  return createPortal(
    <div className={`modal ${visible ? "is-active" : "is-hidden"}`}>
      <div className="modal-background" />
      <div className="modal-content" ref={ref}>
        <p className="image">
          <img src={src} alt={alt} />
        </p>
      </div>
    </div>,
    element
  );
}
