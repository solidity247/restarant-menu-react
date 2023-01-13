import React from 'react'
import Slideshow from './Slideshow'
import AboutUs from './AboutUs'
import { Button } from '@mui/material'
import ReserveModal from './ReserveModal';
import './ReserveModal'



function HomePage() {
  const [openR, setOpenR] = React.useState(false);
  return (
    <div>
      {openR && <ReserveModal openR = {openR}
      setOpenR = {setOpenR}/>}
      <Slideshow />
     <Button
     id='main-reserve'
     onClick={()=>setOpenR(true)}
     >Reservation</Button>
     <br />
     <br />
      <AboutUs />
    </div>
  )
}

export default HomePage