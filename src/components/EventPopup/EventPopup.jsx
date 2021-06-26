import React from 'react'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const Popup = ({createEvent, showPopup=false, eventName=null, eventStartMoment=null}) => {

  useEffect(() => { 
    //Animate on Scroll
    Aos.init({ duration: 1000 });
  }, [])

  return (
    showPopup ? 
      <div data-aos="fade-down">
        
      </div>
    :
      <></>
  )
}

export default Popup
