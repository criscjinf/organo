import React from 'react'
import './TextField.css'

class TextField extends React.Component {
  
  whenTyping(event) {
    this.props.whenTyping(event.target.value)
  }
  render() {
    const placeholder = `${this.props.placeholder}...`
    return (    
      <div className='text-field'>
        <label>{this.props.label}</label>
        <input value={this.props.value} required={this.props.required} onChange={(event) => this.whenTyping(event)} placeholder={placeholder}/>
      </div>
    )
  }
}

export default TextField