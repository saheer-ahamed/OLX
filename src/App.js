import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/SignupPage';
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/postContext';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/view'>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
