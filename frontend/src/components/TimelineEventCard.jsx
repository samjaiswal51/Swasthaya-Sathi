import React from "react";
import { CalendarDays, Stethoscope, Pill, FileText } from "lucide-react";

const iconMap = {
  diagnosis: <Stethoscope className="text-red-500" />,
  medication: <Pill className="text-blue-500" />,
  test: <FileText className="text-green-500" />,
  consultation: <CalendarDays className="text-purple-500" />,
};

const TimelineEventCard = ({ event }) => {
  return (
    <div className="relative pl-10 mb-10 border-l-2 border-gray-300">
      <div className="absolute left-[-12px] top-0 bg-white p-2 rounded-full border shadow">
        {iconMap[event.type] || <CalendarDays />}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.date}</p>
        <p className="mt-1 text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineEventCard;
