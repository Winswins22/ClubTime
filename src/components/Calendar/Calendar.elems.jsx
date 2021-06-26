import React from 'react'
import styled from 'styled-components'

export const MonthGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 5px solid black;
`

export const MonthDay = styled.div`
  
`