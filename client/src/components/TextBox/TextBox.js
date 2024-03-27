import "./TextBox.css";

function TextBox(props) {
  return (
    <div className="TextBox" style={{ ...props }}>
      {props?.text}
    </div>
  );
}

export default TextBox;
