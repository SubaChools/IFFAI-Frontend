const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute w-screen h-screen object-fill"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/IFFAI AI ALL.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  </section>
  );
};

export default Hero;
