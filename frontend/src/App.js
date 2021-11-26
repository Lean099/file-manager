import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./index.css";
import './App.css';

import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'
import { FileManager } from './components/FileManager'
import { FeedbackAccountDeleted } from './components/FeedbackAccountDeleted'
import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <ProtectedRoute exact path="/myDrive" component={FileManager}/>
      <Route exact path="/feedbackAccountDeleted" component={FeedbackAccountDeleted}/>
    </Router>
  );
}

export default App;
