import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const recp = useLoaderData();

  return (
    <div>
      <h2>test{recp.id}</h2>
    </div>
  );
};

export default ViewDetails;
