import React from "react";
import "../src/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./Component/Home";
import Add from "./Component/Add";
import View from "./Component/View";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/view" element={<View />} />

          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}
