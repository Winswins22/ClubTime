import React, {useEffect, useState} from 'react'
import moment from 'moment'

import {FaTimes} from 'react-icons/fa'

import {
  PopupBase,
  Greyify,
  PopupForm,
  PopupInput,
  PopupDateInput,
  PopupTimeInput,
  ItemCenterer,
  PopupSubmit,
  PopupCancel
} from './EventPopup.elems'

import {
  LargeWhiteText,
  WhiteSmallText,
  NewLine
} from '../globalStyles'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const Popup = ({showPopup, togglePopup, addEvent, eventName=null, eventStartMoment=null}) => {

  const [submitted, changeSubmit] = useState(false)
  const [submitText, changeText] = useState("Create Event!");
  const [submitColor, changeColor] = useState("#353547")
 
  useEffect(() => { 
    //Animate on Scroll
    Aos.init({ duration: 1000 });
  }, [])

  function createEvent(name, date, time, calendar){
    console.log("New Event:", name, date, time)

    let timeByDay = date.split("-")
    let year = timeByDay[0];
    let month = timeByDay[1] - 1;
    let day = timeByDay[2];

    let timeInDay = time.split(":")
    let hour = timeInDay[0] 
    let minute = timeInDay[1]

    let momentDate = moment();
    momentDate.set({'year' : year, 'month': month, 'date':day, 'hour': hour, 'minute': minute});

    console.log("Event Creation Output", {"calendar":calendar, "name":name, "date":momentDate})
    addEvent(name, momentDate, calendar)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!submitted){

      changeSubmit(true)

      setTimeout(() => {
        changeText("Creating ...")
      }, 100)
      setTimeout(() => {
        changeText("Created!")
        changeColor("green")
      }, 2000)
      setTimeout(() => {
        togglePopup(!showPopup)
        changeSubmit(false)
        changeText("Create Event!")
        changeColor("#353547")

        createEvent(e.target.name.value, e.target.date.value, e.target.time.value, e.target.calendar.value)

      }, 3000)
    }
    
  }

  return (
    showPopup ? 
      <>
        <Greyify>
          <div style={{position: "fixed"}}>
            <div data-aos="fade-down">
              <ItemCenterer>
                <PopupBase>

                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <LargeWhiteText style={{padding: "10px", fontWeight: "bold", textDecoration:"underline"}}> Add Event </LargeWhiteText>
                    <FaTimes style={{cursor:"pointer"}} size={100} onClick={() => togglePopup(!showPopup)}></FaTimes>
                  </div>
                  
                  <PopupForm onSubmit={handleSubmit}>

                    <WhiteSmallText> Event Name </WhiteSmallText>
                    <PopupInput value={eventName} name="name" placeholder="Event Name"></PopupInput>
                    
                    <NewLine></NewLine>
                    <WhiteSmallText> Calendar Name </WhiteSmallText>
                    <PopupInput name="calendar" value="homework"></PopupInput>
                    
                    <NewLine></NewLine>
                    <WhiteSmallText> Event Date </WhiteSmallText>
                    <PopupDateInput name="date"></PopupDateInput>
                    
                    <NewLine></NewLine>
                    <WhiteSmallText> Event Time </WhiteSmallText>
                    <PopupTimeInput name="time" placeholder="Event Time"></PopupTimeInput>

                    <NewLine></NewLine>
                    <NewLine></NewLine>
                    <PopupSubmit value={submitText} style={{backgroundColor:submitColor}}></PopupSubmit>
                    
                  </PopupForm>

                </PopupBase>
              </ItemCenterer>
            </div>
          </div>
        </Greyify>
      </>
    :
      <></>
  )
}


export default Popup