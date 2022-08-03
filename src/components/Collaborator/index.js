import React from 'react'
import './Collaborator.css'

class Collaborator extends React.Component {

  render() {
    const { name, image, office } = this.props.collaborator
    const { backgroundColor } = this.props
    return (      
      <div className='collaborator'>
        <div className='header' style={{backgroundColor: backgroundColor}}>
          <img src={image} alt={name}></img>
        </div>
        <div className='footer'>
          <h4>{name}</h4>
          <h5>{office}</h5>
        </div>
      </div>
  )}
}

export default Collaborator