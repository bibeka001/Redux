import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Userdata from "../Other/Userdata";
import Home from "./Components/Home";
import Homecontainer from "./Container/Homecontainer";
import Headercontainer from "./Container/Headercontainer";
function App() {
  return (
    <>
      <Headercontainer />
      <Homecontainer />
    </>
  );
}

export default App;
