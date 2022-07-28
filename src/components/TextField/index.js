import React from 'react'
import './TextField.css'

class TextField extends React.Component {
  whenTyping(event) {
    console.log(event.target.value)
  }
  render() {
    const placeholder = `${this.props.placeholder}...`
    return (    
      <div className='text-field'>
        <label>{this.props.label}</label>
        <input required={this.props.required} onChange={this.whenTyping} placeholder={placeholder}/>
      </div>
    )
  }
}

export default TextField