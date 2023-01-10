import React from 'react';
 import './VisitUs.css'

 const VisitUs = () => {
   return (
    <div className="visit-page"> 
      {/* <div className="img-wrapper-menupage">
        <img  className="img-menu-page" src="https://tomdra.com/wp-content/uploads/2020/01/header-healthy.jpg" alt="burger" />

      </div> */}
     <div className="visit-container">
       <div className='address'>
         <article className='main'>OUR ADDRESS</article>
         <h4>3 Maja 38
           <br />
           40-565 Chicago
           <br />
           USA
         </h4>
       </div>

       <div className='phone'>
         <article className='main'>PHONE & MAIL</article>
         <h4>+48883513838
           <br />
           restaurant.chicago@gmail.com
         </h4>
       </div>

       <div className='hours'>
         <article className='main'>OPENING HOURS</article>
         <h4>Monday-Saturday
           <br />
           12:00-00:00
           <br />
           Sunday
           <br />
           12:00-02:00
         </h4>
       </div>
     </div>
     </div>
   )
 }

 export default VisitUs

