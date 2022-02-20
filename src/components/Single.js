import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'

export default function Single() {

  const { id } = useParams()
  const navigate = useNavigate()

  if (!localStorage.getItem('notes')) window.location = '/'
  const notes = JSON.parse(localStorage.getItem('notes'))
  const note = notes.find(n => n.id === id)
  if (!note) window.location = '/'

  const [text, setText] = useState(note.content)

  function setContent(content) {
    setText(content)
    notes[notes.findIndex(n => n.id === id)].content = content
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function deleteNote(e) {
    e.preventDefault()
    localStorage.setItem('notes', JSON.stringify(notes.filter(n => n.id !== id)))
    navigate('/')
  }

  return <>
    <p>
      <Link to="/">Retour</Link>
    </p>
    <textarea value={ text } onChange={ e => setContent(e.target.value) } placeholder="Nouvelle note" />
    <p>
      <a href="/" onClick={ e => deleteNote(e) } className="secondary">Supprimer</a>
    </p>
  </>
}