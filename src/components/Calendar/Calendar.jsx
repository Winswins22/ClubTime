import React, {useState, useEffect} from 'react'
import moment from 'moment'

import Popup from '../EventPopup/EventPopup'

import {
  MdKeyboardArrowDown, 
  MdKeyboardArrowRight, 
  MdKeyboardArrowLeft
} from 'react-icons/md'

import {
  MonthGrid,
  MonthDay,
  Arrows,
  AllowedGridSpace,
  CalendarBar,
  DynamicFlexbox,
  Event
} from './Calendar.elems'

import {
  MenuWrapper,
  CollapsibleHeader,
  CollapsibleItem
} from '../Menu/Menu.elems'

import {
  LargeText,
  Text
} from '../globalStyles'

const Calendar = () => {

  const [calendar, setCalendar] = useState([]);
  const [currentDay, setDay] = useState(moment());
  const [showPopup, togglePopup] = useState(false);

  const [showParties, toggleParties] = useState(true);
  const [showHw, toggleHw] = useState(true);
  const [showCS, toggleCS] = useState(true);
  const [showMath, toggleMath] = useState(true);

  let startDay = currentDay.clone().startOf("month").startOf("week");
  let endDay = currentDay.clone().endOf("month").endOf("week");

  function createCalendar(){
    startDay = currentDay.clone().startOf("month").startOf("week");
    endDay = currentDay.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const a = [];
    while (day.isBefore(endDay, "day") || (a.length < 6)) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    console.log("og", calendar)
    setCalendar(a);
    console.log("new", calendar)
  };

  useEffect(() => {
    createCalendar()
  }, [])

  function decreaseMonth(){
    console.log("decrease")
    setDay(currentDay.subtract(1, "month"))
    createCalendar()
  }

  function increaseMonth(){
    console.log("increase")
    setDay(currentDay.add(1, "month"))
    createCalendar()
  }

  function isSameMonth(moment1, moment2){
    return (moment1.format("MMMM") === moment2.format("MMMM"))
  }

  function isSameDay(moment1, moment2){
    return ((moment1.format("MMMM") === moment2.format("MMMM")) && moment1.format("D") === moment2.format("D"))
  }

  // Workaround functions
  function clickParties(){
    toggleParties(!showParties)
  }

  function clickHw(){
    toggleHw(!showHw)
  }

  function clickCS(){
    toggleCS(!showCS)
  }

  function clickMath(){
    toggleMath(!showMath)
  }

  return (
    <>
      <Popup showPopup={showPopup} togglePopup={togglePopup}></Popup>
      <DynamicFlexbox>

        {/* Menu */}
        <MenuWrapper style={{marginTop:"70px"}}>
          <CollapsibleHeader usePlus={true} title={"Calendars"}></CollapsibleHeader>
          <CollapsibleItem style={{cursor: "pointer"}} toggleCheckmark={showParties} name="Parties" doClick={clickParties}></CollapsibleItem>
          <CollapsibleItem style={{cursor: "pointer"}} toggleCheckmark={showHw} name="Homework" doClick={clickHw}></CollapsibleItem>

          <CollapsibleHeader title={"Clubs"}></CollapsibleHeader>
          <CollapsibleItem style={{cursor: "pointer"}} toggleCheckmark={showCS} name="CS Club" doClick={clickCS}></CollapsibleItem>
          <CollapsibleItem style={{cursor: "pointer"}} toggleCheckmark={showMath} name="Math Club" doClick={clickMath}></CollapsibleItem>
        </MenuWrapper>

        {/* Calendar */}
        <div>
          <CalendarBar>
            
            <LargeText>{currentDay.format('MMMM YYYY')}</LargeText>

            <div style={{display:"flex"}}>
              {/* <Arrows onClick={decreaseMonth}> {"<"} </Arrows> */}
              <MdKeyboardArrowLeft style={{cursor:"pointer"}} size={100} onClick={decreaseMonth}></MdKeyboardArrowLeft>
              <div style={{marginLeft: "50px"}}></div>
              {/* <Arrows onClick={increaseMonth}> {">"} </Arrows> */}
              <MdKeyboardArrowRight style={{cursor:"pointer"}} size={100} onClick={increaseMonth}></MdKeyboardArrowRight>
            </div>
            
          </CalendarBar>

          <AllowedGridSpace>
            <MonthGrid>

              {
                calendar.map((week) => {
                  return (
                    week.map((day) => {
                      return (
                        <MonthDay 
                          bgColor={() => isSameMonth(day, currentDay) ? "transparent" : "grey"}
                          onClick={() => togglePopup(!showPopup)}
                        >
                          {day.clone().format("D")}
                          {
                            /*Event Checker */
                            isSameDay(day, currentDay) ?
                              <Event time="5AM" name="Sleep time"></Event>
                            :
                              <></>
                          }
                        </MonthDay>
                      )
                    })
                  )
                })
              }

            </MonthGrid>
          </AllowedGridSpace>
        </div>

      </DynamicFlexbox>
      
      


    </>
  )
}

export default Calendar
