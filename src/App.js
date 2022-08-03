import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import PageFooter from './components/PageFooter';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },
    {
      name: 'Data-Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#ED6869',
      secundaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF',
    }
  ]
  const [collaboratores, setCollaborator] = useState([])

  const newCollaboratorAdd = (collaborator) => {
    console.log(collaborator)
    setCollaborator([...collaboratores, collaborator])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} onSaveCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>
      {teams.map((team => <Team 
        name={team.name}
        key={team.name}
        primaryColor={team.primaryColor}
        secundaryColor={team.secundaryColor}
        collaborators={collaboratores.filter(collaborator => collaborator.team === team.name)}
      />)
      )}
      <PageFooter/>
    </div>
  );
}

export default App;
