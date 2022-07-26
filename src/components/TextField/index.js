import React from 'react'
import './TextField.css'

class TextField extends React.Component {
  render() {
    const placeholder = `${this.props.placeholder}...`
    return (    
      <div className='text-field'>
        <label>{this.props.label}</label>
        <input placeholder={placeholder}/>
      </div>
    )
  }
}

export default TextField