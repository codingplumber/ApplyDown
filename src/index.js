import React, { Component } from "react";
import ReactDOM from "react-dom";

import Modal from "./modal";
import "./styles.css";

class Input extends Component {
  state = {
    data: [
      { item: "key", value: 1234 },
      { item: "watch", value: 123456 },
      { item: "car", value: 6543210 }
    ]
  };

  handleClick = (value, item) => {
    console.log("Clicked!!", value, item);
  };

  handleValue = (value, item) => {
    const data = this.state.data.map(x => {
      if (x.item === item) {
        x.value = value;
      }
      return x;
    });
    this.setState({ data });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.data.map(x => {
          return (
            <Modal
              key={x.item}
              item={x.item}
              clickMe={this.handleClick}
              value={x.value}
            >
              <input
                className="input"
                value={x.value}
                onChange={e => this.handleValue(e.target.value, x.item)}
              />
            </Modal>
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Input />, rootElement);
