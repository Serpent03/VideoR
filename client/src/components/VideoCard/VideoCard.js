import COLORS from "../../constants/Colors";
import TextBox from "../TextBox/TextBox";
import "./VideoCard.css"

function VideoCard(props) {
  /** @todo fix colors */
  /** @todo fix the video card footer */
  return (
    <div className="videoCard">
      <img src={props?.thumb} alt={props?.title}></img>
      <div className="textArea">
        <span>{props?.title}</span>
        <a href={props?.url}>{props?.url}</a>
      </div>
      <div className="video-footer">_</div>
    </div>
  );
}

export default VideoCard;
