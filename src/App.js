import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<News key="general" pageSize = {8} category='general'/>}></Route>
            <Route path="/business" element={<News key="business" pageSize = {8} category='business'/>}></Route>
            <Route path="/entertainment" element={<News key="entertainment" pageSize = {8} category='entertainment'/>}></Route>
            <Route path="/health" element={<News key="health" pageSize = {8} category='health'/>}></Route>
            <Route path="/science" element={<News key="science" pageSize = {8} category='science'/>}></Route>
            <Route path="/sports" element={<News key="sports" pageSize = {8} category='sports'/>}></Route>
            <Route path="/technology" element={<News key="technology" pageSize = {8} category='technology'/>}></Route>
          </Routes>
      </Router>
      </div>
    );
  }
}
