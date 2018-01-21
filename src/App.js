import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }

  componentWillMount() {
    axios.get('http://rest.learncode.academy/api/wstern/users')
      .then((response) => {
        // console.log(response);
        this.setState({
          data: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log(error);
      });

  }
  render() {
    let content
    let arr = this.state.data
    if (this.state.loading === true) {
      content = <div className="loader"></div>

    } else {
      console.log(this.state.data,'Abhishek');
      content = <div>
        <ul>
          {
            arr.map((ele, k) => <li key={k}>{ele.id}</li>
            )}
        </ul>
      </div>
    }
    return (
      <div>
        {content}
      </div>
    )
  }

}
export default App
