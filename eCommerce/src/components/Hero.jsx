import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/banner-image.png";
import banner2 from "../assets/banner-image2.png"; // Contoh banner tambahan

const Hero = () => {
  // Konfigurasi slider dengan autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,         // Mengaktifkan autoplay
    autoplaySpeed: 3000,    // Waktu delay antar slide (ms)
  };

  // Data banner
  const banners = [
    {
      image: banner1,
      title: "Judul Banner 1",
      description: "Ini adalah deskripsi singkat untuk banner 1.",
      link: "/shop",
    },
    {
      image: banner2,
      title: "Judul Banner 2",
      description: "Ini adalah deskripsi singkat untuk banner 2.",
      link: "/shop",
    },
  ];

  return (
    <section className="relative py-10 top-20">
      <Slider {...settings} className="container mx-auto  items-center rounded-lg bg-gray-200 ">
        {banners.map((banner, index) => (
          <div className=""
            key={index}
           
          >
            <div className=" flex flex-col md:flex-row items-center  ">
              
            <div className="md:w-1/2 mb-4 relative top-5">
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="h-auto max-w-[350px]  max-h-[250px] object-cover"
              />

            </div>
            <div className="md:w-1/2 px-4 md:px-8">
              <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
              <p className="mb-4 text-gray-700">{banner.description}</p>
              <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-bg-white rounded-full hover:bg-gray-500">
                <a className="text-white" href={banner.link}>
                  Lihat Selengkapnya
                </a>
              </button>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
