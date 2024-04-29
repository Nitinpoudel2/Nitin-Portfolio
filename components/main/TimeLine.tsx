import React from "react";
import TimeLineElements from "../sub/TimelineElements";

const TimeLine = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-60 py-10 h-screen">
      {/* Added h-screen to fix the height */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Experience
      </h1>
      <div className="timeline-container flex justify-center">
        {/* Left side */}
        <div className="timeline-item-content mr-8">
          <TimeLineElements
            title={"1"}
            location={"Mankato,MN"}
            description={"Worked on React, Native ,Javascript"}
            date={"January 2023 - Januray 2024"}
          />

          <TimeLineElements
            title={"1"}
            location={"Mankato,MN"}
            description={"Worked on React, Native ,Javascript"}
            date={"January 2023 - Januray 2024"}
          />
        </div>
        {/* Vertical line */}
        <div className="w-pxbg-gradient-to-r from-purple-500 to-cyan-500"></div>
        {/* Right side */}
        <div className="timeline-item-content ml-8 mr-2">
          <TimeLineElements
            title={"1"}
            location={"Mankato,MN"}
            description={"Worked on React, Native ,Javascript"}
            date={"January 2023 - Januray 2024"}
          />

          <TimeLineElements
            title={"1"}
            location={"Mankato,MN"}
            description={"Worked on React, Native ,Javascript"}
            date={"January 2023 - Januray 2024"}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
