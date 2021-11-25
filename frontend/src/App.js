import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./index.css";
import './App.css';

import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom"
import {Home} from './components/Home'
import {FileManager} from './components/FileManager'
import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <ProtectedRoute exact path="/myDrive" element={<FileManager/>}/>
    </Routes>
  );
}

export default App;
