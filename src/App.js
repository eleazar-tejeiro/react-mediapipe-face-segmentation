import './App.css';
import Home from './components/Home/Home';
import FaceSegmentation from './components/FaceSegmentation/FaceSegmentation';
import ErrorPage from './components/ErrorPage/ErrorPage';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path='/'>
          <Home />
          <Link className="button" to='/face-segmentation'>Face Segmentation</Link>
        </Route>

        <Route path='/face-segmentation'>
          <FaceSegmentation/>
          <Link className="button" to='/'>Home</Link>
        </Route>

        <Route path='/error-page'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
