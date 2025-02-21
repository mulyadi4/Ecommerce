import banner from "../assets/banner-image.png";

const Hero = () => {
  return (
    <section className=" xs:flex-row-reverse items-center justify-between relative top-20 xs:top-60 bg-gray-500 p-6 rounded-lg">
      {/* Gambar di kanan */}
      <div className="flex flex-col">

      <div className="max-w-96">
        <img className="max-h-96 max-w-96 rounded-lg shadow-lg" src={banner} alt="Banner" />
      </div>
      
      {/* Teks di kiri */}
      <div className="text-white text-2xl font-bold xs:w-1/2">
        <h1>Welcome to Our Website</h1>
        <p className="text-lg font-light mt-2">
          Discover amazing content and learn new things every day.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Hero;
