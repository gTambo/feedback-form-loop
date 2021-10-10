import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import HowDoYouFeel from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import IsSupported from '../PageThree/PageThree';
import Commentate from '../PageFour/PageFour';
import ReviewFeedback from '../ReviewSubmit/ReviewSubmit';
import Reset from '../Reset/Reset';
import AdminPage from '../AdminPage/AdminPage';

function App() {

  return (
    <div className='App'>
      <Header />
      {/* Router file tree below */}
      <Router >
        <div className="pages" >
          {/* Page one set to Home page, consider separate home page */}
          <Route exact path="/">
            Page 1 of 4 <HowDoYouFeel />
          </Route>
          <Route exact path="/understand">
            Page 2 of 4<Understanding />
          </Route>
          <Route exact path= "/supported">
            Page 3 of 4<IsSupported />
          </Route>
          <Route exact path="/comment">
            Page 4 of 4 <Commentate />
          </Route>
          <Route exact path="/review">
            Review and Submit <ReviewFeedback />
          </Route>
          <Route exact path="/reset">
            Success and Restart <Reset />
          </Route>
          <Route exact path="/supersecret">
            Admin <AdminPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
