import React, { Component } from 'react'
import{BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={AboutMe} />
        </div>
      </BrowserRouter>
    )
  }
}
