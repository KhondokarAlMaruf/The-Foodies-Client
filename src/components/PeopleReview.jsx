import React from "react";

const PeopleReview = () => {
  return (
    <div>
      <div>
        <h2 className="text-center my-10 text-4xl md:text-6xl font-semibold font-teko text-pink-300 ">
          What People Are Saying
        </h2>
      </div>
      <div className="flex flex-row place-content-around my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body border-4 border-pink-300">
            <h2 className="card-title">Urassaya Sperbund</h2>
            <p>
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert. I recommend to everyone! I would like to
              come back here again and again.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body  border-4 border-pink-300">
            <h2 className="card-title">Nadech Kugimiya</h2>
            <p>
              This place is great! Atmosphere is chill and cool but the staff is
              also really friendly. They know what they’re doing and what
              they’re talking about, and you can tell making the customers happy
              is their main priority. Food is pretty good, some italian classics
              and some twists, and for their prices it’s 100% worth it
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body  border-4 border-pink-300">
            <h2 className="card-title">Jirayu Tangsrisuk</h2>
            <p>
              Excellent food. Menu is extensive and seasonal to a particularly
              high standard. Definitely fine dining. It can be expensive but
              worth it and they do different deals on different nights so it’s
              worth checking them out before you book. Highly recommended.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleReview;
