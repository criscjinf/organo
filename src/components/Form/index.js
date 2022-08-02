import React from "react"
import Button from "../Button"
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import './Form.css'

class Form extends React.Component {
  
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      office: '',
      image: '',
      team: ''
    }
  }

  aoSalvar(event) {
    event.preventDefault()
    const {name, office, image, team} = this.state
    this.props.onSaveCollaborator({name, office, image, team})
  }
  render() {
    return (
      <section className="collaboratorForm">
        <form onSubmit={(event) => this.aoSalvar(event)}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextField
            value={this.state.name}
            required={true}
            label="Nome"
            placeholder="Digite seu nome"
            whenTyping={value => this.setState({name: value})}
          />
          <TextField 
            value={this.state.office}
            label="Cargo"
            placeholder="Digite seu cargo"
            whenTyping={value => this.setState({office: value})}
          />
          <TextField
            value={this.state.image}
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            whenTyping={value => this.setState({image: value})}
          />
          <DropdownList 
            required={true}
            items={this.props.teams}
            label='Times'
            value={this.state.team}
            whenChanged={value => this.setState({team: value})}
          />
          <Button>
            Criar Card
          </Button>
        </form>
      </section>
    )
  }
}

export default Form