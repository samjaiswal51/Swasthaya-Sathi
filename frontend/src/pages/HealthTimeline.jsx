import React from "react";
import healthTimelineData from "../data/healthTimelineData";
import TimelineEventCard from "../components/TimelineEventCard";

const HealthTimeline = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Health Timeline</h1>
      <div className="max-w-2xl mx-auto">
        {healthTimelineData.map((event, index) => (
          <TimelineEventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HealthTimeline;
