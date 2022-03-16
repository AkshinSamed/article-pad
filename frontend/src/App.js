// import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import LoginAndSignUpFormComponent from './components/LoginAndSignUpFormComponent';
import NavBarComponent from './components/NavBarComponent';
import ArticleViewComponent from './components/ArticleViewComponent';
import AboutUsComponent from './components/AboutUsComponent';
import CreateArticleComponent from './components/CreateArticleComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route path='/' exact component={LoginAndSignUpFormComponent}></Route>
              <Route path='/:falseCredentials' exact component={LoginAndSignUpFormComponent}></Route>
        <NavBarComponent/>
              <Route path='/about-us' exact component={AboutUsComponent}></Route>
              <Route path='/article-view/:email/:password' exact component={ArticleViewComponent}></Route>
              <Route path='/create-article' exact component={CreateArticleComponent}></Route>
              {/* <Route path='/test-view/:email/:password' exact component={TestViewComponent}></Route> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
