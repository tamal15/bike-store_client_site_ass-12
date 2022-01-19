import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeProducts.css'

const HomeProducts = () => {
    const [product,setProduct]=useState([])

    // useEffect(()=>{
    //     fetch('https://shielded-beach-03067.herokuapp.com/bike')
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data))
    // },[])

    useEffect(()=>{
            fetch('https://shielded-beach-03067.herokuapp.com/bike')
            .then(res=>res.json())
            .then(data=>{
                const sliceData=data.slice(0,6)
                setProduct(sliceData)
            })
        },[])
    const designShow = {
        width: '20rem'
    }
    return (
        <div className="cars">
            <div className="container">
                <h1 className="mt-5">Many <span className="mans">Bike</span></h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-auto">

                {
                        product.map((offers,index)=>(
                            <div className="col mb-5 mt-5 image-card ">
           
                            <div className="card " style={designShow}>
                                <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs finals">
                                    <h3>{offers.name}</h3>
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

export default HomeProducts;