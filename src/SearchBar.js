import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange = event => {
    this.props.handleFilter(event.target.value);
  };

  render() {
    const { onChange } = this;
    return (
      <span className="flex justify-center mv2">
        <input
          type="text"
          placeholder="search todos here..."
          className="br3 w-50 tc pa2 mh2 shadow-5 bg-near-white fw7"
          onChange={onChange}
        />
        <i className="fas fa-plus-circle f2 lightest-blue" />
      </span>
    );
  }
}

export default SearchBar;
