import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import HowDoYouFeel from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import IsSupported from '../Support/Support';
import Commentate from '../Comment/Comment';
import ReviewFeedback from '../ReviewSubmit/ReviewSubmit';
import Reset from '../Reset/Reset';
import AdminPage from '../AdminPage/AdminPage';

function App() {

  return (
    <div className='App'>
      <Header />
      {/* Router file tree below */}
      <Router >
        <div>
          {/* Page one set to Home page, consider separate home page */}
          <Route exact path="/">
            <p className="pages">Page 1 of 4</p> <HowDoYouFeel />
          </Route>
          <Route exact path="/understand">
            <p className="pages">Page 2 of 4</p><Understanding />
          </Route>
          <Route exact path= "/supported">
            <p className="pages">Page 3 of 4</p><IsSupported />
          </Route>
          <Route exact path="/comment">
            <p className="pages">Page 4 of 4</p><Commentate />
          </Route>
          <Route exact path="/review">
            <p className="pages">Review and Submit</p><ReviewFeedback />
          </Route>
          <Route exact path="/reset">
            <p className="pages">Success and Restart</p><Reset />
          </Route>
          <Route exact path="/supersecret">
            <AdminPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
