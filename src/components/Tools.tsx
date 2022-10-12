import React from "react";
import Link from "next/link";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

const tools = [
  {
    Name: "Validation Techniques for Ml",
    Title: "Model and Training Data Quality and Testing ",
    video: "/react.mp4",
    // image: (
    //   <ReactPlayer
    //     className="react-player"
    //     url="https://www.youtube.com/watch?v=_I_D_8Z4sJE"
    //     width="100%"
    //     height="221px"
    //   />
    // ),
  },
  {
    Name: "Complex Evolving System",
    Title: "Validation Methods and Techniques",
    video: "/video2.mp4",
  },
  {
    Name: "Data-Driven Engineering",
    Title: "Data collection,Pattern Recognition and Analytics",
    video: "/video2.mp4",
  },
];

export const Tools = () => {
  return (
    <section id="Tools">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ivves tools in Action</h2>
      </div>
      {/* 
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((item, index) => (
          <div className="" key={index}>
            <video
              className="h-full md:h-auto "
              src="/video2.mp4"
              controls
            ></video>
          </div>
        ))}
      </div> */}

      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            475: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {tools.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                <div className="relative block h-full w-full overflow-hidden ">
                  <video
                    className="h-full md:h-auto "
                    src={item.video}
                    controls
                  ></video>
                </div>

                <div className="flex flex-col border-t p-4 dark:border-slate-600">
                  <h5 className="text-md block truncate font-semibold capitalize">
                    {item.Title}
                  </h5>
                  <span className="block truncate text-slate-500 dark:text-slate-400">
                    {item.Name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
