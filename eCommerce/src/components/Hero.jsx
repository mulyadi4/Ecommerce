import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleUp } from "react-icons/fa";
import banner1 from "../assets/banner-image1.png";
import banner2 from "../assets/banner-image2.png";
import banner3 from "../assets/banner-image3.png";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,         
    autoplaySpeed: 3000,    
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const banners = [
    {
      image: banner1,
      title: "Smartwatch Terbaik",
      description:
        "Pantau kesehatan, terima notifikasi, dan tampil stylish setiap hari!.",
      link: "/product/12",
    },
    {
      image: banner2,
      title: "Playsation 5",
      description:
        "Rasakan pengalaman gaming next-gen dengan grafis 4K memukau dan kecepatan SSD super cepat!.",
      link: "/product/6",
    },
    {
      image: banner3,
      title: "Samsung Galaxy S23",
      description:
        "Ambil momen terbaik dengan kamera 200MP & performa flagship yang tak tertandingi.",
      link: "/product/10",
    },
  ];

  return (
    <section className="relative py-10 top-20 px-4">
      <Slider {...settings} className="container mx-auto rounded-lg bg-gray-200">
        {banners.map((banner, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center items-center mb-4">
                <img
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                  className="h-auto max-w-[350px] max-h-[250px] object-cover object-center"
                />
              </div>
              <div className="md:w-1/2 px-4 md:px-8">
                <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
                <p className="mb-4 text-gray-700">{banner.description}</p>
                <button className="px-5 py-3 mb-4 bg-gradient-to-r from-gray-700 to-bg-white rounded-full hover:bg-gray-500">
                  <a className="text-white" href={banner.link}>
                    Lihat Selengkapnya
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {showButton && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-500"
        >
          <FaAngleUp className="text-white" size={24} />
        </div>
      )}
    </section>
  );
};

export default Hero;
