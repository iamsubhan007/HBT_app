import React from 'react'

function Banner() {
  return (
    <section className="relative w-[100%] max-h-full md:w-[100%] md:h-full lg:w-full lg:h-full flex flex-col items-center justify-center text-white text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full md:w-full md:h-96 object-cover"
        src="bannerHBT1.mp4"
        autoPlay
        muted
        playsInline
      />
    </section>

  );
}

export default Banner;