import TextBox from "./components/TextBox/TextBox"
import "./App.css"
import UploadBox from "./components/UploadBox/UploadBox";
import VideoCard from "./components/VideoCard/VideoCard";

function App() {
  return <div className="App">
    <VideoCard url={"www.google.com"} title={"nevergonnagiveyaup"} thumb={"https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"}/>
  </div>;
}

export default App;
