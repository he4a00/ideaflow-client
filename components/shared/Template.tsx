'use client';
import { useRef } from 'react';

const Template = () => {
  const monitorRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-2xl">
      <div className="w-full max-w-5xl mx-auto p-8">
        <div className="relative">
          {/* Monitor frame */}
          <div
            ref={monitorRef}
            className="aspect-[16/9] w-full bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Screen content */}
            <div className="w-full h-full bg-[#AEAEC0] p-4 relative">
              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-4 py-2 z-10 text-center">
                <p className="text-sm font-medium">Mind Map</p>
                <p className="text-xs text-gray-500">Central Topic</p>
              </div>

              {/* Top nodes */}
              <div className="absolute left-[30%] top-[20%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Strategic Planning</p>
              </div>
              <div className="absolute left-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Project Management</p>
              </div>
              <div className="absolute left-[15%] top-[40%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Resource Allocation</p>
              </div>
              <div className="absolute left-[25%] top-[55%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Team Structure</p>
              </div>
              <div className="absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Budget Planning</p>
              </div>

              {/* Right nodes */}
              <div className="absolute left-[70%] top-[20%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Market Research</p>
              </div>
              <div className="absolute left-[80%] top-[30%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Competitor Analysis</p>
              </div>
              <div className="absolute left-[75%] top-[45%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Customer Feedback</p>
              </div>
              <div className="absolute left-[85%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Product Strategy</p>
              </div>
              <div className="absolute left-[75%] top-[75%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Marketing Plan</p>
              </div>

              {/* Bottom nodes */}
              <div className="absolute left-[40%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Implementation Timeline</p>
              </div>
              <div className="absolute left-[60%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-3 py-1.5 z-10">
                <p className="text-xs">Success Metrics</p>
              </div>

              {/* Top-left sub-nodes */}
              <div className="absolute left-[10%] top-[25%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Long-term Goals</p>
              </div>
              <div className="absolute left-[5%] top-[35%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Short-term Objectives</p>
              </div>
              <div className="absolute left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Task Assignment</p>
              </div>
              <div className="absolute left-[5%] top-[65%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Progress Tracking</p>
              </div>

              {/* Top-right sub-nodes */}
              <div className="absolute left-[90%] top-[25%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Target Audience</p>
              </div>
              <div className="absolute left-[95%] top-[35%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Market Trends</p>
              </div>
              <div className="absolute left-[90%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">User Experience</p>
              </div>
              <div className="absolute left-[95%] top-[65%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-sm px-2 py-1 z-10">
                <p className="text-[10px]">Sales Strategy</p>
              </div>

              {/* SVG for connections */}
              <svg className="absolute inset-0 w-full h-full">
                {/* Connect central node to main branches */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="30%"
                  y2="20%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="30%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="40%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="25%"
                  y2="55%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="70%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />

                <line
                  x1="50%"
                  y1="50%"
                  x2="70%"
                  y2="20%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="30%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="45%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="60%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="75%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />

                <line
                  x1="50%"
                  y1="50%"
                  x2="40%"
                  y2="80%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="60%"
                  y2="80%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />

                {/* Connect main branches to sub-branches */}
                <line
                  x1="30%"
                  y1="20%"
                  x2="10%"
                  y2="25%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="20%"
                  y1="30%"
                  x2="5%"
                  y2="35%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="15%"
                  y1="40%"
                  x2="10%"
                  y2="50%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="20%"
                  y1="70%"
                  x2="5%"
                  y2="65%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />

                <line
                  x1="70%"
                  y1="20%"
                  x2="90%"
                  y2="25%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="80%"
                  y1="30%"
                  x2="95%"
                  y2="35%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="75%"
                  y1="45%"
                  x2="90%"
                  y2="50%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <line
                  x1="85%"
                  y1="60%"
                  x2="95%"
                  y2="65%"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* Monitor stand */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg" />
            <div className="w-32 h-2 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
