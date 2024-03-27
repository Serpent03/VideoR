import Colors from "../../constants/Colors";
import "./ButtonBox.css";
import TextBox from "../TextBox/TextBox";

function ButtonBox(props) {
  /** 
   * @todo add in button functionality(onClick)
   * @todo add support for iconification
   */

  return (
    <button className="ButtonBox" style={{ backgroundColor: Colors.sky_blue }}>
      <TextBox text={props?.text} />
    </button>
  );
}

export default ButtonBox;
