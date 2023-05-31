import React from "react";
import Banner from "./Banner";
import PeopleReview from "./PeopleReview";
import OurServices from "./OurServices";
import MasterChefs from "./MasterChefs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MasterChefs></MasterChefs>
      <OurServices></OurServices>
      <PeopleReview></PeopleReview>
    </div>
  );
};

export default Home;
