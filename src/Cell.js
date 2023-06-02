import React, {Component} from 'react'
import "./Cell.css"

class Cell extends Component {

  handleClick  = (evt) => {
    // calling the function received as a prop to flip the cells
    let [x, y] = this.props.id.split('-')
    x = +x;
    y = +y;
    this.props.flipCells(x, y);
  }

  render() {
    let classes = `Cell ${this.props.winClass}` + (this.props.isLit ? " Cell-lit" : "");

    return (
        <div className={classes} onClick={this.handleClick}></div>
    )
  }
}


export default Cell