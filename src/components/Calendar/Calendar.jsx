import React, {useState, useEffect} from 'react'
import moment from 'moment'

import {
  MonthGrid,
  MonthDay,
  Arrows
} from './Calendar.elems'

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
    while (day.isBefore(endDay, "day")) {
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

  return (
    <>
      {currentDay.format('MMMM YYYY')}

      <MonthGrid>

        {
          calendar.map((week) => {
            return (
              week.map((day) => {
                return (
                  <MonthDay>{day.clone().format("D")}</MonthDay>
                )
              })
            )
          })
        }

      </MonthGrid>

      <div style={{display:"flex", flexDirection:"row"}}>
        <Arrows onClick={decreaseMonth}> {"<"} </Arrows>
        <Arrows onClick={increaseMonth}> {">"} </Arrows>
      </div>

    </>
  )
}

export default Calendar
