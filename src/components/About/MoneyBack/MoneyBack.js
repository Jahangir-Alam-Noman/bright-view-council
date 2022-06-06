/** @format */

import React from "react";
import image from "../../../assets/img/money-back-gurantgee/Rectangle_1.png";

const MoneyBack = () => {
  return (
    <div className='container money_back_gurantee  mt-4 text-start'>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        <div className='col'>
          <div className='card p-5'>
            <p>
              <img src={image} alt='' />
            </p>
            <div className='card-body'>
              <h5 className='card-title'>Money Back Guarantee</h5>
              <p className='card-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                officia deserunt dolore libero quasi excepturi ullam rem sit.
                Magnam hic enim temporibus autem debitis ea amet tempore
                aspernatur sequi, fugiat error voluptate, earum aperiam officia,
                architecto sed dolorum distinctio et!
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card p-5'>
            <p>
              <img src={image} alt='' />
            </p>
            <div className='card-body'>
              <h5 className='card-title'>University Level Education</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium perspiciatis molestiae magni assumenda esse dicta
                dolore vel consequatur aliquid animi fuga mollitia, sed
                reprehenderit ut obcaecati? Odio, nisi nam vel exercitationem
                aut eos hic, voluptas magnam ad asperiores reiciendis! Facere.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card p-5'>
            <p>
              <img src={image} alt='' />
            </p>
            <div className='card-body'>
              <h5 className='card-title'>Frinedly Processors</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nesciunt libero cumque pariatur? Tenetur excepturi a natus
                necessitatibus suscipit sit voluptatum incidunt veniam provident
                quis maiores dolore quae placeat labore, sapiente ex ratione
                iusto. Incidunt iusto quaerat cum consectetur reiciendis!
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card p-5'>
            <p>
              <img src={image} alt='' />
            </p>
            <div className='card-body'>
              <h5 className='card-title'>Interesting Curriculum</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                soluta impedit ipsa ut repudiandae ducimus eos, consequatur
                aperiam dolorem minus magni, quaerat, illum modi repellendus
                animi dicta rem dignissimos. Consequuntur fugit voluptas enim
                sequi tenetur nobis similique deserunt dicta possimus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
