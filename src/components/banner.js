import React from 'react'

function Banner() {
  return (
    <section className="relative w-full h-96 md:w-full md:h-full lg:w-full lg:h-full flex flex-col items-center justify-center text-white text-center overflow-hidden">
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