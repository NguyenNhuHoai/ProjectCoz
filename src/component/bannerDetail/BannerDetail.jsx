import React from "react";

const BannerDetail = ({ reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container  flex flex-col items-center justify-center py-10 xl:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          {/* text container */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
              reverse ? "md:order-last" : ""
            }`}
          >
            <h1 className="text-2xl md:text-4xl">
              We Built Apps That Get Trending On Appworld
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              quisquam fugiat impedit cumque voluptates saepe sit velit, quia
              earum doloribus, voluptatem aspernatur, ipsum asperiores ea
              consequatur delectus et beatae quae?
            </p>
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus a consequuntur deleniti sit unde nam tenetur
                  voluptatibus.
                </li>
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus a consequuntur deleniti sit unde nam tenetur
                  voluptatibus.
                </li>
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus a consequuntur deleniti sit unde nam tenetur
                  voluptatibus.
                </li>
              </ul>
            </div>
            <button className="btn-primary">Get Started</button>
          </div>
          {/* img container */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className={reverse ? "order-1" : ""}
          >
            <img
              src="https://hocmay.vn/wp-content/uploads/2023/04/nuphu_2021_mvt_thumbnail_tittle-ee3fb28837a9-1636359129174-lbp38uoi.png"
              alt="not fount"
              className="mx-auto w-full p-4 max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetail;
