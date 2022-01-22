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
        width: '19rem'
    }
    return (
        <div className="cars">
            <div className="container ">
                <h1 className="mt-5 pb-5">Many <span className="mans">Bike</span></h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5  mx-auto">

                {
                        product.map((offers,index)=>(
                            <div className="col ">
           
                            <div className="card h-100" style={designShow}>
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






        // start 
        //    <div>
        //        <section className='container my-5'>
        //        <h1 className="mt-5 pb-5">Many <span className="mans">Bike</span></h1>
        //            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto'>

        //            {
        //                  product.map((offers,index)=>(
        //                     <div className="col">
        //                     <div className="card h-100">
        //                       <img src={offers.img} className="card-img-top rounded-circle p-4 mx-auto" alt="..."/>
        //                       <div className="card-body finals">
                                
        //                         <p className="card-text text-center halka">{offers.name}</p>
        //                           <div className="text-center ">
                                   
        //                            <h6 className="my-2 client-name skip">{offers.description}</h6>
        //                            <Link to={`/serviceDetails/${offers._id}`}> <button className="button">Buy Now</button></Link>
        //                           </div>
        //                       </div>
                             
        //                     </div>
        //                   </div>
        //                  ))
        //              }
        //            </div>
        //        </section>
        //    </div>

        // end 
    );
};

export default HomeProducts;