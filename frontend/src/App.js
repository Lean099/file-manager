import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import { Switch, Route } from "react-router-dom"
import { Home } from './components/Home'
import { FileManager } from './components/FileManager'
import { FeedbackAccountDeleted } from './components/FeedbackAccountDeleted'
import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <ProtectedRoute exact path="/myDrive" component={FileManager}/>
      <Route exact path="/feedbackAccountDeleted" component={FeedbackAccountDeleted}/>
    </Switch>
  );
}

export default App;
