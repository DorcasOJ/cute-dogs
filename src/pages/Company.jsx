import React from "react";

const Company = () => {
  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-8 7xl:px-0 pt-12 ">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col md:flex-row md:gap-3 gap-6">
          <div className="flex-1 flex flex-col gap-2 md:items-start md:pe-[2.5%] md:justify-center md:gap-8 ">
            <span className="text-2xl font-normal tracking-wider md:text-4xl lg:text-5xl ">
              We love dogs
            </span>
            <div className="ps-1 md:tracking-wider">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur distinctio iure animi laborum itaque. Porro voluptates
              asperiores aperiam aspernatur expedita, saepe error? Doloribus
              optio, accusamus harum inventore vel delectus sapiente. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Neque
              molestiae praesentium maxime. Ipsum consectetur debitis accusamus
              reprehenderit dolor excepturi quisquam, suscipit est cupiditate
              ad, ea quae itaque voluptatum ducimus nulla.
            </div>
          </div>
          <div className="flex-1">
            <img
              loading="lazy"
              src="/images/company-dog-1.jpg"
              alt=""
              className="w-full h-full object-cover md:rounded-e-xl"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:gap-3 gap-6">
          <div className="flex-1">
            <img
              loading="lazy"
              src="/images/company-dog-2.jpg"
              alt=""
              className="w-full max-h-[50vh] object-cover md:rounded-s-xl "
            />
          </div>

          <div className="flex-1 flex flex-col gap-2 md:items-start md:pe-[2.5%] md:justify-center md:gap-8 ">
            <span className="text-xl tracking-wider font-normal md:text-4xl lg:text-5xl">
              We hope you do
            </span>
            <div className="ps-1 md:tracking-wider">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              voluptatem non, doloribus quo ad delectus omnis neque in veritatis
              magnam facere dolorum enim et cumque aut animi voluptas maiores
              eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi sit quibusdam quo minus, porro magni odit officia voluptates
              odio, quaerat nesciunt quisquam aliquid placeat ex aliquam omnis
              possimus quia ipsam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe sed omnis, blanditiis, officia sapiente
              nam maiores incidunt eum iusto in dolorem neque totam nesciunt
              laboriosam. Enim totam nemo blanditiis quaerat!
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-10">
        <p className=" tracking-wide transition py-10 ">
          Monito mision is Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto rerum expedita commodi modi quis ab eius placeat? Aut
          inventore tempora impedit dolorum, modi sint corrupti facere iure.
          Molestias, est debitis. You can join our community Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Neque laudantium accusantium
          veritatis pariatur, incidunt, reprehenderit ad fugiat suscipit porro
          ipsum eius dolores autem ducimus numquam voluptatum placeat iusto
          architecto rerum. Also, register for our programs Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Ullam nostrum commodi animi
          dolorem dignissimos laudantium voluptates nobis nisi praesentium,
          alias aspernatur at tempora facilis aliquam enim vel consectetur saepe
          possimus?
        </p>
      </div>
    </div>
  );
};

export default Company;
