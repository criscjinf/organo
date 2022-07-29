import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [collaboratores, setCollaborator] = useState([])

  const newCollaboratorAdd = (collaborator) => {
    console.log(collaborator)
    setCollaborator([...collaboratores, collaborator])
  }

  return (
    <div className="App">
      <Banner/>
      <Form onSaveCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>
      <Team name="Programação"/>
      <Team name="Frontend"/>
      <Team name="Data Science"/>
    </div>
  );
}

export default App;
