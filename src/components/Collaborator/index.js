import React from 'react'
import './Collaborator.css'

class Collaborator extends React.Component {

  render() {
    return (
      <div className='collaborator'>
        <div className='header'>
          <img src="https://github.com/criscjinf.png" alt="Cristiano Lemos"></img>
        </div>
        <div className='footer'>
          <h4>Cristiano Lemos</h4>
          <h5>Desenvolvedor</h5>
        </div>
      </div>
  )}
}

export default Collaborator