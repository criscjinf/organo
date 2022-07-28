import React from "react"
import Button from "../Button"
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import './Form.css'

class Form extends React.Component {
  
  aoSalvar(event) {
    event.preventDefault()
    console.log('Salvou')
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
        <form onSubmit={this.aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
          <TextField label="Cargo" placeholder="Digite seu cargo"/>
          <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
          <DropdownList required={true} items={teams} label='Times'/>
          <Button>
            Criar Card
          </Button>
        </form>
      </section>
    )
  }
}

export default Form