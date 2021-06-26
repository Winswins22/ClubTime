import React, {useState, useEffect} from 'react'
import moment from 'moment'

import {
  MonthGrid,
  MonthDay
} from './Calendar.elems'

const Calendar = () => {

  const [calendar, setCalendar] = useState([]);
  const [currentDay, setDay] = useState(moment());
  const startDay = currentDay.clone().startOf("month").startOf("week");
  const endDay = currentDay.clone().endOf("month").endOf("week");

  useEffect(() => {
    const day = startDay.clone().subtract(1, "day");
    const a = [];
    while (day.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(a);
  }, [currentDay]);

  return (
    <>

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

    </>
  )
}

export default Calendar
