// Write your code here
import {ListItem, Note, Title, NotesLists} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails
  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </ListItem>
  )
}

export default NoteItem
