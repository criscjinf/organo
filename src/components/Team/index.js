import React from "react";
import Collaborator from "../Collaborator";
import './Team.css'

class Team extends React.Component {
  render() {
    return (
      <section className="team" style={{backgroundColor: this.props.secundaryColor}}>
        <h3 style={{borderColor: this.props.primaryColor}}>{this.props.name}</h3>
        <Collaborator/>
      </section>
    )
  }
}

export default Team