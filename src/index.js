import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import List from './components/List'
import Single from './components/Single'
import '@picocss/pico'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <List /> } />
      <Route path="/note/:id" element={ <Single /> } />
      <Route path="*" element={ <Link to="/">Rien ici 😅 on revient en arrière ?</Link> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('kote')
)