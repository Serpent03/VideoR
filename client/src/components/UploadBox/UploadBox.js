import ButtonBox from "../ButtonBox/ButtonBox";
import COLORS from "../../constants/Colors";
import "./UploadBox.css"

function UploadBox(props) {
  /** @todo get data from the input box */
  /** @todo fix the issue where ti is not taking the entire available space */
  return (
    <div className="UploadBox">
      <ButtonBox text={"Upload Video"} />
      <input id="inputField" className="inputField" placeholder="Paste a video URL"></input>
    </div>
  );
}

export default UploadBox;
