import React from "react";
import './Team.css'

class Team extends React.Component {
  render() {
    return (
      <section className="team">
        <h3>{this.props.name}</h3>
      </section>
    )
  }
}

export default Team