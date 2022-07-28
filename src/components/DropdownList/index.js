import React from "react";
import './DropdownList.css';

class DropdownList extends React.Component {
  render() {
    return (
      <div className="dropdownList">
        <label>{this.props.label}</label>
        <select
          required={this.props.required}
          onChange={event => this.props.whenChanged(event.target.value)}
          value={this.props.value}
        >
          {this.props.items.map(item => <option key={item}>{item}</option>)} 
        </select>
      </div>
    )
  }
}

export default DropdownList