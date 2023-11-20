import React from "react";

const Hero = () => {
  return (
    <div className="h-[650px] md:h[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-8 text-white">
          {/* hero text container */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center text-center gap-4 md:items-center md:text-left"
          >
            <h1 className="text-4xl">
              We Built App That Get Trending On Appoworld
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
              accusantium dolores consequuntur expedita libero est ipsa beatae
              quod reiciendis dolor at vitae odit, rem, mollitia aliquid a?
              Vitae, quas.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">Get started</button>
              <button className="btn-outline">Login</button>
            </div>
          </div>
          {/* hero Image container */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img
              src="https://photo2.tinhte.vn/data/attachment-files/2022/04/5937870_Phap-Su-Khong-Phep-Thuat-The-Gioi-Phep-Thuat.png"
              alt="Not found"
              className="mx-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
