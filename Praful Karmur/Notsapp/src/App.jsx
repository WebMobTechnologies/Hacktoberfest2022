import './styles/global.css'
import styles from './styles/App.module.css'

import { Button } from './components/Button'
import { Note } from './components/Note'
import { Form } from './components/Form'

import { NoteProvider } from './contexts/NoteContext'

function App() {
  return (
    <NoteProvider>
      <div className={styles.app}>
        <h1>React Notes</h1>
        <Form>
          <Button />
        </Form>
        <Note />
      </div>
    </NoteProvider>
  )
}

export default App
