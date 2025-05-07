import styles from "../modules/VideoHome.module.css";
import goProVideo from "../assets/goProVideo.mp4";

export default function VideoHome() {
  return (
    <div className={styles.videoContainer}>
      <video src={goProVideo} autoPlay loop muted />
    </div>
  );
}
