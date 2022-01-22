import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const MoreProducts = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch('https://shielded-beach-03067.herokuapp.com/bike')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const designShow = {
        width: '19rem'
    }

    return (
        <div>
            <Navigation></Navigation>
          <div className="container keywords">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5  mx-auto">

              {
                        product.map((offers,index)=>(
                            <div className="col">
           
                            <div className="card mt-5" style={designShow}>
                                <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs finals">
                                    <h3>{offers.name}</h3>
                                    <h3>{offers.price}</h3>
                                    <p class="card-text texts">{offers.description}.</p>
                                  
                                    <Link to={`/serviceDetails/${offers._id}`}> <button className="button">Buy Now</button></Link>
                                  
                                 
                                </div>
                    
                    
                            </div>
                        </div>
                        ))
                    }
              </div>
          </div>
        </div>
    );
};

export default MoreProducts;