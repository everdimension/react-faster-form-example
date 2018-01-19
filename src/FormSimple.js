import * as React from "react";

export default class FormSimple extends React.Component {
  values = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.values[id] = value;
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(this.values));
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input
          id="email"
          type="email"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <br />
        <input
          id="password"
          type="password"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <br />
        <button type="submite">Submite</button>
      </form>
    );
  }
}
