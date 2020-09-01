import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import ProfilePage from './pages/profile/profile.page';
import Header from './components/header/header';

import UserContext from './contexts/user/user.context';

import {Auth} from './firebase/firebase';

import { GlobalStyles, PagesStyles } from './globalstyles';


const App = () => {
  const [user, setUser] = useState(null);
  const [isSignIn, setisSignIn] = useState(false)
  
  useEffect(() => { Auth.onAuthStateChanged( (user) => {
    if (user) {
      console.log(user.uid)
      setUser(user);
      setisSignIn(true)
    } else{
      setUser(null);
      setisSignIn(false);
    }
  })

      console.log("Auth CHanged")
  },[])

  return (
    <div>
      <GlobalStyles />
      <UserContext.Provider value={user}>
        <Header isSigned={isSignIn} />
      </UserContext.Provider>
      <PagesStyles>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/signin' render={() => user===null ? <SignInPage/> : <Redirect to='/'/>} />
          <Route exact path='/signup' render={() => user===null ? <SignUpPage/> : <Redirect to='/'/>}/>
          <Route exact path='/home/:id' component={ProfilePage} />
        </Switch>
      </PagesStyles>
    </div>

  );
}

export default App;
