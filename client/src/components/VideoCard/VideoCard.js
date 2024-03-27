import "./VideoCard.css";

function VideoCard(props) {
  /** @todo fix colors */
  /** @todo add icons */
  return (
    <div className="videoCard">
      <img src={props?.thumb} alt={props?.title}></img>
      <div className="textArea">
        <span>{props?.title}</span>
        <a href={props?.url}>url</a>
      </div>
      <button className="actionArea">
        Delete
      </button>
    </div>
  );
}

export default VideoCard;
