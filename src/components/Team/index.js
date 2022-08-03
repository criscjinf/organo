import React from "react";
import Collaborator from "../Collaborator";
import './Team.css'

class Team extends React.Component {
  render() {
    return (
      (this.props.collaborators.length > 0) &&
      <section className="team" style={{backgroundColor: this.props.secundaryColor}}>
        <h3 style={{borderColor: this.props.primaryColor}}>{this.props.name}</h3>
        <div className="collaborators">
          {this.props.collaborators.map(collaborator => <Collaborator backgroundColor={this.props.primaryColor} key={collaborator.name} collaborator={collaborator}/>)}
        </div>
      </section>
    )
  }
}

export default Team