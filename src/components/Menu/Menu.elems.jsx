import React from "react";
import styled from "styled-components";

import {MdKeyboardArrowDown} from 'react-icons/md'
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'
import {GoPlus} from 'react-icons/go'

import {
  Text,
  VerySmallText
} from '../globalStyles'

export const MenuWrapper = styled.div`
  padding: 0 25px;
  padding-top: 25px;
`

const Spacing = styled.div`
  margin-left: 20px;
`

export const CollapsibleHeader = ({title, usePlus = false}) => {
  return(
    <div style={{display:"flex", alignItems:"center"}}>

      <MdKeyboardArrowDown size={50}></MdKeyboardArrowDown>
      <Text> {title} </Text>
      <Spacing></Spacing>
      
      {
        usePlus ?
          <GoPlus size={30} style={{cursor:"pointer"}}></GoPlus>
        :
          <></>
      }

    </div>
  )
} 

// toggleCheckmark - a boolean state. Defaults to True for compatibility
export const CollapsibleItem = ({name, doClick, toggleCheckmark}) => {
  return(
    <div style={{display:"flex", cursor: "pointer"}} onClick={doClick}>

      <Spacing></Spacing>
      {
        toggleCheckmark ? 
          <ImCheckboxChecked size={20}></ImCheckboxChecked>
        :
          <ImCheckboxUnchecked size={20}></ImCheckboxUnchecked>
      }
      <Spacing></Spacing>
      <VerySmallText> {name} </VerySmallText>

    </div>
  )
} 