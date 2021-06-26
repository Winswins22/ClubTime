import React from 'react'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const Popup = () => {

  useEffect(() => { 
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
  }, [])

  return (
    <div data-aos="fade-down">
      
    </div>
  )
}

export default Popup
