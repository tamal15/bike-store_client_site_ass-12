import React from 'react';
import './Client.css'
const Client = () => {
    return (
        <div>

{/* <!-- clients says design  -->  */}

<section className="container my-5">
  <h1 className="text-center mb-5">Happy  <span className="client-color">Clients says</span></h1>



  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
    <div className="col">
      <div className="card h-100">
        <img src="https://i.ibb.co/sFDVz5j/user-1.png" className="card-img-top rounded-circle p-4 mx-auto" alt="..."/>
        <div className="card-body">
         
          <p className="card-text text-center">Develop amazing web and app experiences with tips and advice from the experts at Web.Dev. Keep your users engaged with the latest web development capabilities!.</p>
            <div className="text-center ">
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="far fa-star  client-color"></i>
             <h6 className="my-2 client-name">John Butler</h6>
             <h6>Web Devloper</h6>
            </div>
        </div>
      
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src="https://i.ibb.co/gRWxpsM/user-2.png" className="card-img-top rounded-circle p-4 mx-auto" alt="..."/>
        <div className="card-body">
          
          <p className="card-text text-center">Top Duties and Qualifications. ... A Banker's duties include opening and closing checking accounts, giving basic advice on a bank's products this is important of banker.</p>
            <div className="text-center ">
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="far fa-star  client-color"></i>
             <h6 className="my-2 client-name">Regina Miles</h6>
             <h6>Banker</h6>
            </div>
        </div>
       
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src="https://i.ibb.co/wYFDSJ5/user-data-3.png" className="card-img-top rounded-circle p-4  mx-auto " alt="..."/>
        <div className="card-body">
          
          <p className="card-text text-center">Qualifying engineering experience means a record of progressive experience on engineering work during which the applicant has made a practical utilization of acquired.</p>

            <div className="text-center ">
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="fas fa-star  client-color"></i>
              <i className="far fa-star  client-color"></i>
             <h6 className="my-2 client-name">John Harriet</h6>
             <h6>Engineer</h6>
            </div>
        </div>
      
      </div>
    </div>
  </div>
</section>

            
        </div>
    );
};

export default Client;