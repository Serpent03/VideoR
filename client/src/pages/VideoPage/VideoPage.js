import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import UploadBox from "../../components/UploadBox/UploadBox";
import Header from "../../components/Header/Header";
import "./VideoPage.css";

function VideoPage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="videoPage">
        <UploadBox />
        <div className="videoArea">
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
          <VideoCard
            url={"www.google.com"}
            title={"nevergonnagiveyaup"}
            thumb={
              "https://taskandpurpose.com/uploads/2022/03/04/Screenshot_20210925-131629_VRV.jpg?auto=webp"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
