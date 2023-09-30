// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const NotesContainer = styled.form`
  height: 250px;
  box-shadow: 1px 4px 8px 0px #475569;
  border-radius: 8px;
  width: 80%;
  width: 85%;
  margin-top: 40px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 900px;
  }
`

export const TitleInput = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  color: #475569;
  font-size: 20px;
  padding: 25px;
  padding-top: 44px;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  font-size: 20px;
  padding: 25px;
`
export const AddButton = styled.button`
  padding: 8px;
  width: 80px;
  background-color: #4c63b6;
  color: white;
  border-radius: 3px;
  align-self: flex-end;
  margin: 25px;
  cursor: pointer;
`
export const NotesLists = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  width: 80%;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    max-width: 900px;
  }
`
export const NoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`
export const NoImg = styled.img`
  width: 90px;
`
export const NoItemHead = styled.h1`
  font-size: 20px;
  color: #334155;
`

export const NoItemDescription = styled.p`
  font-size: 16px;
  color: #aab8c8;
`
