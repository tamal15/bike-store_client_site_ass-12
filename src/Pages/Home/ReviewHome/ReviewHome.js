import React, { useEffect, useState } from 'react';
import './ReviewHome.css'
import {RatingView} from 'react-simple-star-rating'

const ReviewHome = () => {

    const [comment,setComment]=useState([])
    useEffect(()=>{
        fetch('https://shielded-beach-03067.herokuapp.com/review')
        .then(res=>res.json())
         .then(data=>{
             setComment(data)
             console.log(data)
         })
     
           
    },[])
    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <h2 className="mans lows">Review</h2>
            <div className="container ">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
                 
              {
                        comment?.map((comments)=>(
                            <div className="col mb-5 mt-5 image-card ">
           
                            <div className="card review" style={designShow}>
                            
                              <h3 className='p-2 '>{comments.name}</h3>
                                <div class="card-body body-designs">
                                    <h4>{comments.email}</h4>
                                    <h6 class="card-text">{comments.comments}.</h6>
                                  
                                    <div className="star-rating">
                               <ul className="list-inline">
                                <li className="list-inline-item">
                               
                                <RatingView ratingValue={comments.rating}/>
                                </li>
                               </ul>
                              </div>
                                  
                                 
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

export default ReviewHome;