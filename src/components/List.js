import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

export default function List() {

  if (!localStorage.getItem('notes')) localStorage.setItem('notes', JSON.stringify([{
    id: 'b222364c-834o-id60-a99f-9d9f95fa0992',
    content: 'Hellooo 👋 tout commence ici 🖊\n\nTu peux ajouter, modifier ou supprimer des notes... 🗒\n\n...mais rien ne sors d\'ici 🔒'
  }]))

  let notes = JSON.parse(localStorage.getItem('notes'))
  let navigate = useNavigate()

  function addNote(e) {
    e.preventDefault()
    const id = uuid()
    notes.push({ id: id, content: 'Nouvelle note' })
    localStorage.setItem('notes', JSON.stringify(notes))
    navigate(`/note/${ id }`)
  }

  return <>
    <p>
      <a href="/" onClick={ e => addNote(e) }>Ajouter une note 🖊</a>
    </p>
    <ul>

      { notes.map(note => <li key={ note.id }>
        <Link to={ `/note/${ note.id }` }>{ note.content === '' ? 'Nouvelle note' : note.content.length > 50 ? `${ note.content.substring(0, 50) }...` : note.content }</Link>
      </li> )}

    </ul>
  </>
}