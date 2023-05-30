import React from "react";

const OurServices = () => {
  return (
    <div>
      <div>
        <h2 className="text-center my-10 text-4xl md:text-6xl font-semibold font-teko text-pink-300 ">
          Our Services
        </h2>
      </div>
      <div className="flex flex-row place-content-around my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body border-4 border-pink-300">
            <h2 className="card-title">Master Chefs</h2>
            <p>
              A Master Chef is a professional cook who has reached the highest
              level of culinary skill and expertise.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body  border-4 border-pink-300">
            <h2 className="card-title">Quality Food</h2>
            <p>
              Quality food is not just about taste, but also about nutritional
              value, safety, and sustainability.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body  border-4 border-pink-300">
            <h2 className="card-title">Online Order</h2>
            <p>
              Online ordering refers to the process of placing an order for
              goods or services using the mobile device.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body  border-4 border-pink-300">
            <h2 className="card-title">24/7 Service</h2>
            <p>
              24/7 service refers to a business or organization that operates
              around the clock, 24 hours a day, 7 days a week.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
