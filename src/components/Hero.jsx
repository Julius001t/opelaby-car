const Hero = () => {
  return (
    <section className="relative h-[80vh]">
      
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url(/cars/fola_car3.jpeg)" }}
        ></div>

        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url(/cars/fola_car.jpeg)" }}
        ></div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold max-w-xl">
          Buy your car safely!
        </h2>

        <p className="mt-4 text-lg max-w-lg text-gray-200">
          All cars are verified and inspected by professionals
        </p>

        <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold w-fit">
          Check available offers
        </button>
      </div>

    </section>
  );
};

export default Hero;
