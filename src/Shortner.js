import React, { Component } from 'react';

export default class Shortener extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
      shortURL: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ long_url: this.state.input })
    };
    console.log(requestOptions);
    await fetch('/create-short-url', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ shortURL: data.short_url }));
  };

  render() {
    return (<div>
      <div>URL SHORTENER</div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter URL :
          <input type="text" value={this.state.input} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <div>
          <span>Short URL is </span>
          <a href={this.state.shortURL} target="_blank">{this.state.shortURL}</a>
        </div>
      </form>
    </div>)
  }
}
