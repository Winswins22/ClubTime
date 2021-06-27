import React from 'react'
import styled from 'styled-components'

import {
  VerySmallText,
  SmallText
} from '../globalStyles'

export const AllowedGridSpace = styled.div`
  height: 50vh;
  width: 80vw;

  margin: 0 auto;
`

export const MonthGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(7, calc(80vw/7));
  grid-template-rows: repeat(6, 12vh);
  border: 5px solid black;
`

export const MonthDay = styled.div`
  font-size: 1.5rem;
  background-color: ${({bgColor}) => bgColor};

  :hover {
    transition: background-color 0.2s;
    background-color: ${({bgColor}) => (bgColor === "grey") ? "grey" : "orange"};
  }
`

export const CalendarBar = styled.div`
  display:flex; 
  justify-content: space-between;
  align-items: center;

  margin: 0 5vw;
`

export const Arrows = styled.div`
  font-size: 5rem;
  cursor: pointer;
`


export const DynamicFlexbox = styled.div`

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }

`

export const OrangeBox = styled.div`
  border: 2px solid black;
  background-color: orange;
  border-radius: 1px;
  width: 10px;
  height: 10px;
`

export const Event = ({time, name}) => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginLeft:"2px"}}>
      <div style={{display:"flex"}}>
        <OrangeBox></OrangeBox>
        <p style={{fontSize:"1rem", margin:"0"}}>{name}</p>
      </div>
      <p style={{fontSize:"0.8rem", margin:"0", marginRight:"2px"}}>{time}</p>
    </div>
    </>
  )
}
