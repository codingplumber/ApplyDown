import React, { Component } from "react";

class Modal extends Component {
  state = {
    show: false
  };

  handleDoubleClick = () => this.setState({ show: !this.state.show });

  handleBlur = () => this.setState({ show: !this.state.show });

  render() {
    const { value, item, clickMe, children } = this.props;
    const { show } = this.state;
    const { handleDoubleClick, handleBlur } = this;

    const visible = !show ? { display: "none" } : null;

    return (
      <div
        className="modal-wrapper"
        onDoubleClick={handleDoubleClick}
        onBlur={handleBlur}
      >
        {children}
        <div className="modal" style={visible}>
          <input
            className="click-me"
            type="button"
            value="Apply Down"
            onClick={() => clickMe(value, item)}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
