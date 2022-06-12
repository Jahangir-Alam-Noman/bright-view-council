/** @format */

import React from "react";
import image from "../../../assets/img/grinding-knowledge/Vector_1.png";

const GrindingKnowledge = () => {
  return (
    <div className="container grinding_knowledge mt-4 p-5 text-start">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <h2 className="fw-bolder">We are hub of Grinding knowledge</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium vero odit dicta illo veritatis assumenda quibusdam eaque
            alias, doloremque error! Dignissimos deserunt expedita temporibus
            eos iure ducimus officia ea illo, voluptate adipisci nobis quae
            sapiente. Qui veritatis similique animi tempora esse porro. Eum,
            similique, iste quas maiores repellendus repudiandae dicta et maxime
            nobis esse voluptates accusamus libero! Tempora porro nobis quas quo
            dolorum assumenda temporibus doloribus aut aliquam explicabo, sequi
            rem quod maxime dolores quis sint voluptatum impedit facere cum
            accusamus a mollitia dolore quos? Reprehenderit eveniet enim veniam
            repellat, eos dolore quaerat sit esse itaque cum praesentium beatae
            tenetur, ut quis repudiandae pariatur voluptate minima corporis
            quisquam exercitationem optio rerum unde. Tempore odio minus.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 grinding_knowledge_image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GrindingKnowledge;
