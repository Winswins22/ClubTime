import React from 'react'
import styled from 'styled-components'

export const AllowedGridSpace = styled.div`
  height: 50vh;
  width: 90vw;

  margin: 0 auto;
`

export const MonthGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(7, calc(90vw/7));
  grid-template-rows: repeat(6, 12vh);
  border: 5px solid black;
`

export const MonthDay = styled.div`
  font-size: 1.5rem;
  background-color: ${({bgColor}) => bgColor};
`

export const CalendarBar = styled.div`
  display:flex; 
  justify-content: space-between;
  align-items: center;

  margin: 0 5vw;
`

export const Arrows = styled.div`
  font-size: 5rem;
`


export const LargeText = styled.div`
  font-size: 3rem;
`

export const Text = styled.div`
  font-size: 2.5rem;
`