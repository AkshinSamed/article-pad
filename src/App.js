import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginAndSignUpFormComponent from './components/LoginAndSignUpFormComponent';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/' exact component={LoginAndSignUpFormComponent}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
