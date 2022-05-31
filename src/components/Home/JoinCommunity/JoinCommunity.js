import React from "react";
import "./JoinCommunity.css";

const JoinCommunity = () => {
  return (

    // <div class="container partner pt-5 mt-5">
    //     <div class="row">
    //       <div class="col-sm-8">col-sm-8</div>
    //       <div class="col-sm-4">col-sm-4</div>
    //     </div>
    // </div>

    
    <div className="container">
      <div class="card mb-3 join_community">
        <div class="row g-0">
          <div class="col-md-2">
            <i className="fa fa-train fs-1 ps-3" aria-hidden="true"></i>
          </div>
          <div class="col-md-6">
            <div class="card-body text-start">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit 
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
