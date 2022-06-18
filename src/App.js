import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Redux-3/Navbar/Navbar";
// import Product from "./Redux-3/Product/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Practice/Navbar/Navbar";
import Message from "./Practice/Component/Message";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/message" element={<Message />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
