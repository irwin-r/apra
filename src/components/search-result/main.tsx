import { ReactElement, useCallback, useState } from "react";
import { SearchResultProps } from "./types";
import { ImageModal } from "../image-modal";

export default function SearchResult({
  id,
  thumbnailUrl,
  title,
  url,
}: SearchResultProps): ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <ImageModal
        alt={title}
        onClose={handleClose}
        src={url}
        visible={isModalVisible}
      />
      <tr className="is-clickable" onClick={handleClick}>
        <td className="is-vcentered">{id}</td>
        <td className="is-vcentered">{title}</td>
        <td className="is-vcentered">
          <figure className="image is-48x48">
            <img alt={title} src={thumbnailUrl} />
          </figure>
        </td>
      </tr>
    </>
  );
}
