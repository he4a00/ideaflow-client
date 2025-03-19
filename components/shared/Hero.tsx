import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-20 px-8">
        <h1 className="text-[60px] leading-[72px] font-bold text-center max-w-[1013px]">
          Transform Your Ideas into{" "}
          <span className="text-[#4F46E5]">Visual Mind Maps</span> with AI
        </h1>
        <p className="max-w-[670px] text-[20px] font-normal text-center text-[#4B5563]">
          Create beautiful, organized mind maps in seconds using artificial
          intelligence. Perfect for brainstorming, project planning, and visual
          learning.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/generate">
            <button className="bg-[#4F46E5] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md cursor-pointer">
              Start Creating Free
            </button>
          </Link>
          <button className="bg-white text-[#374151] flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md border border-[#D1D5DB] cursor-pointer">
            <p className="text-sm sm:text-base md:text-lg">Watch Demo</p>
            <svg
              className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_897)">
                <g clipPath="url(#clip1_1_897)">
                  <path
                    d="M3.17578 1.62111C2.65547 1.30119 2.00156 1.29064 1.4707 1.58947C0.939844 1.88829 0.609375 2.45079 0.609375 3.06251V15.4375C0.609375 16.0492 0.939844 16.6117 1.4707 16.9106C2.00156 17.2094 2.65547 17.1953 3.17578 16.8789L13.3008 10.6914C13.8035 10.3856 14.1094 9.84064 14.1094 9.25001C14.1094 8.65939 13.8035 8.11798 13.3008 7.80861L3.17578 1.62111Z"
                    fill="#374151"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_897">
                  <rect
                    width="13.5"
                    height="18"
                    fill="white"
                    transform="translate(0.609375 0.25)"
                  />
                </clipPath>
                <clipPath id="clip1_1_897">
                  <path
                    d="M0.609375 0.25H14.1094V18.25H0.609375V0.25Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
