import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const list = ["All", "live", "Gaming", "Songs", "Live"];
  return (
    <div className="flex">
      {list.map((val) => (
        <Button key={val} name={val} />
      ))}
    </div>
  );
};

export default ButtonList;
