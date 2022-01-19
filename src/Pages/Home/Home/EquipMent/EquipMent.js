import React from 'react';
import './EquipMent.css'

const EquipMent = () => {
    return (
        
        <div>
{/* <!-- motorcycles equipment  */}

     <section>
      <div className="container my-5">
        <h1 className="text-center mb-5">Motorcycles <span className="mans">equipment</span></h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
            <div className="col">
              <div className="card h-100 border-0 shadow-lg">
                <img src="https://i.ibb.co/m0dkMDm/helmet.jpg" className="card-img-top p-4 w-75 h-75" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title jac">Helmet</h5>
                  <p className="card-text write">A helmet is a form of protective gear worn to protect the head. More specifically, a helmet .</p>
                  <h1 className="client-color"><span className='mans'>$120</span></h1>
                </div>
                <div className="m-3">
                 <button className="button-honda ">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow-lg">
                <img src="https://i.ibb.co/9vKLjFM/jacket.jpg" className="card-img-top p-3 w-100 h-100" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title jac">Jacket</h5>
                  <p className="card-text write">Leathers are one-piece suits or two-piece jackets and trousers worn by motorcyclists, mainly.</p>
                  <h1 className="client-color"><span className='mans'>$320</span></h1>
                </div>
                <div className="">
                    <button className="button-honda m-3">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow-lg">
                <img src="https://i.ibb.co/vJB6dxT/tair.jpg" className="card-img-top  w-100 h-100" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title jac">Tyre</h5>
                  <p className="card-text write">Motorcycle tyres (tires in American English) are the outer part of motorcycle wheels,.</p>
                  <h1 className="client-color"><span className='mans'>$350</span></h1>
                </div>
                <div className="">
                    <button className="button-honda m-3">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
    </div>

    </section>

            
        </div>
    );
};

export default EquipMent;
