import React from "react"
import Button from "../Button"
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import './Form.css'

class Form extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      cargo: '',
      imagem: '',
      team: ''
    }
  }

  aoSalvar(event) {
    event.preventDefault()
    const {nome, cargo, imagem, team} = this.state
    console.log('Salvou => ', nome, cargo, imagem, team)
  }
  render() {
    const teams = [
      'Programação',
      'Front-End',
      'Data-Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão',
    ]
    return (
      <section className="collaboratorForm">
        <form onSubmit={(event) => this.aoSalvar(event)}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextField
            value={this.state.nome}
            required={true}
            label="Nome"
            placeholder="Digite seu nome"
            whenTyping={value => this.setState({nome: value})}
          />
          <TextField 
            value={this.state.cargo}
            label="Cargo"
            placeholder="Digite seu cargo"
            whenTyping={value => this.setState({cargo: value})}
          />
          <TextField
            value={this.state.imagem}
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            whenTyping={value => this.setState({imagem: value})}
          />
          <DropdownList 
            required={true}
            items={teams}
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