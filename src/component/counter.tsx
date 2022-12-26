/* eslint-disable react/prop-types */
import React, { Component } from "react";

type AppState = {

}

type AppProp = {

}

class counter extends Component<AppProp, AppState> {
  state = {
    // count: this.props.value,
    count: this.props.value,
    tag: [],
  };
  formatCounter() {
    const { count } = this.state;
    const zero = <h1>Zero</h1>;
    return count === 0 ? zero : count;
  }
  classColour() {
    let classes = "badge rounded-pill bg-";
    classes += this.state.count === 0 ? "warning" : "info";
    return classes;
  }
  renderTags() {
    return (
      <ul>
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  incrementCount = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  decrement = product => {
    console.log(product);
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.classColour()}>{this.formatCounter()}</span>
        {/* <button onClick={ () => this.incrementCount(product)} className='btn btn-secondary btn-sm'>Increment</button> */}
        <button
          onClick={() => this.incrementCount({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.decrement({ id: 1 })}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tag.length === 0 && "Please create a new tag"}
                {this.renderTags()} */}
      </div>
    );
  }
}

export default counter;
