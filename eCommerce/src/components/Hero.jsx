import banner from "../assets/banner-image.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-between relative  bg-gray-200 py-8 top-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Gambar di kiri */}
        <div className="md:w-1/2 mb-4 ">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* Tulisan di kanan */}
        <div className="md:w-1/2 px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-2">
            Judul Banner
          </h2>
          <p className="mb-4 text-gray-700">
            Ini adalah deskripsi singkat untuk banner. Anda dapat menyesuaikan teks ini sesuai kebutuhan.
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-bg-white  text-white rounded-full hover:bg-gray-600">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </section>

  
  );
};

export default Hero;
