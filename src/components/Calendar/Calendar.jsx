import React, {useState, useEffect} from 'react'
import moment from 'moment'

import {
  MonthGrid,
  MonthDay,
  Arrows,
  AllowedGridSpace,
  CalendarBar
} from './Calendar.elems'

import {
  LargeText,
  Text
} from '../globalStyles'

const Calendar = () => {

  const [calendar, setCalendar] = useState([]);
  const [currentDay, setDay] = useState(moment());
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

  return (
    <>
      <CalendarBar>
        
        <LargeText>{currentDay.format('MMMM YYYY')}</LargeText>

        <div style={{display:"flex"}}>
          <Arrows onClick={decreaseMonth}> {"<"} </Arrows>
          <Arrows onClick={increaseMonth}> {">"} </Arrows>
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
                    >
                      {day.clone().format("D")}
                    </MonthDay>
                  )
                })
              )
            })
          }

        </MonthGrid>
      </AllowedGridSpace>
    </>
  )
}

export default Calendar
