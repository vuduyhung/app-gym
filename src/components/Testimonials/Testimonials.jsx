import React from "react";
import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplayspeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10 py-14">
      <div className="container">
        {/* Testimonal header */}
        <div className="mb-10 mr-auto max-w-[500px] space-y-2 text-left">
          <h1 className="text-4xl font-bold">
            What are the customer saying about us
          </h1>
        </div>

        {/* Testimonal cards */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id} className="my-6">
                <div className="mx-4 flex flex-col gap-4 rounded-lg bg-primary/10 p-8 shadow-lg">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <p className="text-xl font-bold text-black">
                        {item.name}
                      </p>
                      <p>{item.name}</p>
                    </div>
                  </div>

                  <div className="space-y-4 py-5">
                    <p className="text-sm text-gray-500">{item.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
