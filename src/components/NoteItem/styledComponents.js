// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 250px;
  padding: 20px;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  margin-right: 15px;
  margin-top: 25px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const Title = styled.h1`
  color: #334155;
  font-size: 28px;
`
export const Note = styled.p`
  color: #aab8c8;
  font-size: 16px;
`
export const NotesLists = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`
