import React from "react";
import DragDropImageUploader from "../../components/DragDropImageUploader/DragDropImageUploader.jsx";
import DescriptionsContainer from "../../components/DescriptionsContainer/DescriptionsContainer.jsx";
import "./homepage.css";
import backg from "./backg.jpg";
const Homepage = () => {
  return (
    <div
      className="background homePage"
      style={{ backgroundImage: `url(${backg})` }}
    >
      <DragDropImageUploader>
        <DescriptionsContainer />
      </DragDropImageUploader>
    </div>
  );
};

export default Homepage;
