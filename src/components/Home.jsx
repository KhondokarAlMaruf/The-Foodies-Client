import React from "react";
import Banner from "./Banner";
import PeopleReview from "./PeopleReview";
import OurServices from "./OurServices";
import MasterChefs from "./MasterChefs";
import { useNavigation } from "react-router-dom";
import Gallary from "./Gallary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MasterChefs></MasterChefs>
      <Gallary></Gallary>
      <OurServices></OurServices>
      <PeopleReview></PeopleReview>
    </div>
  );
};

export default Home;
