import React, { useState } from 'react';

const EaseInteractiveTimeline = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Fallback sample data if no props are passed
  const timelineData = items.length > 0 ? items : [
    { date: "March 2026", title: "Project Kickoff", desc: "Initial planning and team alignment." },
    { date: "April 2026", title: "Alpha Release", desc: "Core functionalities built and tested." },
    { date: "June 2026", title: "Beta Testing", desc: "User feedback collection and bug fixing." },
    { date: "July 2026", title: "Official Launch", desc: "Deployment to production environment." }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="relative border-l-2 border-blue-500 ml-4 md:ml-32">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className="mb-10 ml-6 cursor-pointer group"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {/* Timeline Dot Anchor */}
            <span className={`absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-blue-600 border-blue-600 scale-125 ring-4 ring-blue-100' 
                : 'bg-white border-blue-500 group-hover:border-blue-600'
            }`} />

            {/* Date Container (Absolute positioning on desktop) */}
            <div className="md:absolute md:-left-36 md:top-1 md:w-28 md:text-right text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
              {item.date}
            </div>

            {/* Content Card */}
            <div className={`p-4 bg-white rounded-lg border transition-all duration-300 ${
              activeIndex === index 
                ? 'shadow-md border-blue-500 bg-blue-50/30' 
                : 'shadow-sm border-gray-200 hover:shadow-md hover:border-gray-300'
            }`}>
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className={`mt-2 text-gray-600 text-sm transition-all duration-300 ${
                activeIndex === index ? 'block' : 'line-clamp-2 md:line-clamp-none'
              }`}>
                {item.desc}
              </p>
              
              {/* Interactive Indicator */}
              <div className="mt-2 text-xs font-medium text-blue-600 md:hidden">
                {activeIndex === index ? 'Show less ↑' : 'Read more ↓'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EaseInteractiveTimeline;
