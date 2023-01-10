import React from 'react';
import './VisitUs.css'

const VisitUs = () => {
  return (
    <div className="visit-container">
      <div className='address'>
        <article>OUR ADDRESS</article>
        <h4>3 Maja 38
          <br />
          40-565 Chicago
          <br />
          USA
        </h4>
      </div>

      <div className='phone'>
        <article>PHONE & MAIL</article>
        <h4>+48883513838
          <br />
          restaurant.chicago@gmail.com
        </h4>
      </div>

      <div className='hours'>
        <article>OPENING HOURS</article>
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
  )
}

export default VisitUs

