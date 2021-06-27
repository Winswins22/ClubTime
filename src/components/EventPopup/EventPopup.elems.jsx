import styled from "styled-components";

export const Greyify = styled.div`
  position: absolute;
  background-color: grey;
  opacity: 0.9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  transition: background-color 0.2s ease;
`

export const ItemCenterer = styled.div`
  display: flex;

  margin-top: 80px;
  width: 100vw;
  height: calc(100vh - 80px);

  justify-content: center;
  align-items: center;
`

export const PopupBase = styled.div`
  width: 50vw;
  height: 70vh;
  background-color: orange;
  opacity: 1;
  border: 10px solid black;
`

export const PopupForm = styled.form`
  padding: 10px;
`

export const PopupInput = styled.input.attrs({
  type: "text"
})`

`

export const PopupTimeInput = styled.input.attrs({
  type: "time"
})`

`

export const PopupDateInput = styled.input.attrs({
  type: "date"
})`

`

export const PopupSubmit = styled.input.attrs({
  type: "submit",
})`
  padding: 10px;
  cursor: pointer;

  color: white;
  font-size: 1.5rem;
  border: none; 
  :hover{
    transition: background-color 0.5s ease;
    background-color: #1c1b5e;
  }
`

export const PopupCancel = styled.div`
`