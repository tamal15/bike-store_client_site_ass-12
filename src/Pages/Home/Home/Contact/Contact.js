import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'
const Contact = () => {
    const { register, handleSubmit} = useForm();

  const onSubmit= (data) =>{
    console.log(data)
    // const appointmentBg={
    //     background:`url(${bg})`,
    //     marginTop:150,
    //     backgroundColor:'rgba(45,58,74,0.9)',
    //     backgroundBlendMode:'darken, luminosity'
    
    //   }
  
  }
    return (
        <div className='bg-honda'>
             <div className="submits mb-5">
      <h1 style={{color:"white", padding:5}} className='mt-5'>Contact <span className="">US</span></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
 <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
 <input type="number" {...register("price")} placeholder="Email" />
 
 <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>


 <input className='subs' type="submit" />
</form>
      </div>
            
        </div>
    );
};

export default Contact;