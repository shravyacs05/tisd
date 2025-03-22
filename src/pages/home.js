import React from "react";

const Home = () => {
  return (
    <div className="p-10">
      {/* Stylish Heading */}
      <h1 className="text-5xl font-bold text-[#CF6DFC] text-center mt-16">
  TISD
</h1>

      {/* Description Section */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold">What is TISD?</h2>
        <p className="text-gray-800 text-lg text-center mt-4 max-w-2xl mx-auto">
  The Tracking Innovation & Sustainable Development (TISD) platform is designed to document
  and monitor academic projects, map them to SDGs, track faculty mentorship, and manage
  collaborations with NGOs and industry experts.
</p>
      </div>
    </div>
  );
};

export default Home;
