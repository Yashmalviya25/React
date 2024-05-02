import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const [params] = useSearchParams();
  const dispath = useDispatch();
  useEffect(() => {
    dispath(closeMenu());
  }, []);

  return (
    <div className="w-full">
      <div className="p-5 flex ">
        <div >
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full ">
          <LiveChat/>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
