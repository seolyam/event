import React from "react";

const Offers = () => {
  return (
    <div className="flex justify-center px-4 py-8 sm:py-0">
      <div className="rounded-lg p-6 shadow-2xl w-full sm:w-fit sm:scale-110">
        <div className="text-lg sm:text-3xl leading-relaxed sm:leading-normal">
          As part of the global GDG network, the chapter offers{" "}
          <br className="hidden sm:block" />
          <span className="text-[#4385f3]">exclusive opportunities</span> to
          engage with Google’s tools <br className="hidden sm:block" /> and
          platforms through <span className="text-[#32A951]">workshops</span>,{" "}
          <span className="text-[#FCBC05]">tech talks</span>, and{" "}
          <span className="text-[#E94335]">
            collaborative
            <br className="hidden sm:block" /> projects
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default Offers;
