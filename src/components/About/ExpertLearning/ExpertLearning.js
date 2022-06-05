/** @format */

import React from "react";
import "./ExpertLearning.css";
import image1 from "../../../images/expert-learning/Rectangle 21.png";
import image2 from "../../../images/expert-learning/Rectangle 22.png";

const ExpertLearning = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4 pt-5 pb-2 text-start ">
        <div className="col">
          <div className="card">
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body p-5">
              <h5 className="card-title">Online Learning</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Asperiores veritatis soluta quisquam hic, fuga ut magni
                non! Rem doloribus facilis illo consequuntur, facere veniam
                impedit exercitationem praesentium rerum necessitatibus dolorum.
                Consequatur voluptates doloremque obcaecati officia
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body p-5">
              <h5 className="card-title">Ask Experts</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Asperiores veritatis soluta quisquam hic, fuga ut magni
                non! Rem doloribus facilis illo consequuntur, facere veniam
                impedit exercitationem praesentium rerum necessitatibus dolorum.
                Consequatur voluptates doloremque obcaecati officia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertLearning;
