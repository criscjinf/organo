import React from "react";
import './DropdownList.css';

class DropdownList extends React.Component {
  render() {
    return (
      <div className="dropdownList">
        <label>{this.props.label}</label>
        <select required={this.props.required}>
          {this.props.items.map(item => <option key={item}>{item}</option>)} 
        </select>
      </div>
    )
  }
}

export default DropdownList