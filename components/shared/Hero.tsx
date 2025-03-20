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
        </div>
      </div>
    </div>
  );
};

export default Hero;
