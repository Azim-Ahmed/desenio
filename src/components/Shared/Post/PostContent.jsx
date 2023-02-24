import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import styles from "./postContent.module.css";

export default function PostContent({ images = [] }) {
  return (
    <div saa className={styles.container}>
      {images.map((img) => (
        <img
          src={`${REACT_APP_IMAGE_BASE_URL}/posts/${img}`}
          className={"rounded-md mb-4 " + styles[img.type]}
          alt="timeline posted image"
        />
      ))}
    </div>
  );
}
