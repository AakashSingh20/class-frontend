import React from "react";
import NavPanel from "../Nav_Panel/NavPanel";
import Content from "../Content/Content";

const Body = () => {
  return (
    <>
      <div className="h-[90vh] flex">
        <div className="border-r-[2px] border-opacity-40 border-[#4a4e69] bg-[#f5f5f5] w-[27%] h-[100%] pl-4 py-14 flex flex-col items-center">
          <NavPanel />
        </div>
        <div className=" w-[73%] h-[100%]">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Body;
