// components/TimeLineElements.tsx
import React from "react";

interface Props {
  title: string;
  location: string;
  description: string;
  date: string;
}

const TimeLineElements: React.FC<Props> = ({
  title,
  location,
  description,
  date,
}) => {
  return (
    <div className="timeline-item bg-color bg-transparent">
      <div className="timeline-item-content">
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#fffff]">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
            <p className="mt-2 text-gray-300">{location}</p>
            <p className="mt-2 text-gray-300">{date}</p>
          </div>
        </div>
      </div>

  );
};

export default TimeLineElements;
