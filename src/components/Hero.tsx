const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets//IFFAI AI ALL.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
    </section>
  );
};

export default Hero;
