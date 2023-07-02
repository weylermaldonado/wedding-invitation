import React from  'react';
import { useLocation } from "react-router-dom";
// components
import Couple from '../../components/couple';
import BackgroundVideo from '../../components/hero4';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import guestList from "../../data/guests.json"

const Homepage4 = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[1]
    let guest = guestList.find((guest) => guest.id === id)
    return(
       <div>
           <Navbar/>
           <BackgroundVideo/>
           <Saveday/>
           <Couple/>
           <Welcome guest={guest}/>
           <Story/>
           <People/>    
           <Location/>
           <Gallery/>
           <Rsvp guest={guest}/>
           <Gift/>
           {/* <Recommendations/> */}
       </div>
    )
}

export default Homepage4;