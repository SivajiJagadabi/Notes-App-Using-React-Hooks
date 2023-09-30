// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  NotesContainer,
  TitleInput,
  TextArea,
  NotesLists,
  NoItemsContainer,
  NoImg,
  NoItemHead,
  NoItemDescription,
  AddButton,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const [notesList, setNotesList] = useState([])

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeTextArea = e => {
    setNote(e.target.value)
  }

  const onAddNote = e => {
    e.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNote => [...prevNote, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <NotesContainer onSubmit={onAddNote}>
        <TitleInput
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextArea
          rows="5"
          cols="50"
          placeholder="Take a Note..."
          onChange={onChangeTextArea}
          value={note}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesContainer>
      {notesList.length === 0 ? (
        <NoItemsContainer>
          <NoImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoItemHead>No Notes yet</NoItemHead>
          <NoItemDescription>Notes you add will appear here</NoItemDescription>
        </NoItemsContainer>
      ) : (
        <NotesLists>
          {notesList.map(eachNote => (
            <NoteItem noteDetails={eachNote} key={eachNote.id} />
          ))}
        </NotesLists>
      )}
    </AppContainer>
  )
}

export default Notes
