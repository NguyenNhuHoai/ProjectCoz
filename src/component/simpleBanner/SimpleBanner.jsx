import React from "react";

const SimpleBanner = () => {
  return (
    <>
      <div className="bg-primary">
        <div data-aos="fade-up" className=" container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autophay; clipboard-write; encrypted-media; gyroscope; pcture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
              <h1 className="text-3xl font-bold">
                Market your next project with coz
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, quisquam, voluptas alias laboriosam inventore fuga,
                quia non quasi quibusdam magnam blanditiis possimus. Adipisci
                quae enim earum accusantium totam voluptatum libero.
              </p>
              <button className="btn-primary !bg-white !text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
