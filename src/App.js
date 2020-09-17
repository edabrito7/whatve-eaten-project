import React, {useState, useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


import HomePage from './pages/home/home.page';
import Header from './components/header/header';
import Spinner from './components/spinner/spinner';

import UserContext from './contexts/user/user.context';

import {Auth, AddUser} from './firebase/firebase';

import { GlobalStyles, PagesStyles } from './globalstyles';

const AboutPage = lazy(() => import('./pages/about/about.page'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.page'));
const SignUpPage = lazy(() => import('./pages/sign-up/sign-up.page'));
const ProfilePage = lazy(() => import('./pages/profile/profile.page'));







const App = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => { Auth.onAuthStateChanged( async (user) => {
    if (user) {
      const userRef = await AddUser(user)
      userRef.onSnapshot( snapShot => {
        setUser({uid: user.uid,...snapShot.data()})
      })
    } else{
      setUser(null);  
    }
  })
  },[])

  return (
    <div>
      <GlobalStyles />
      <UserContext.Provider value={user}>
        <Header isSigned={user} />
      <PagesStyles>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Suspense fallback={<Spinner />}  >
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/signin' render={() => user===null ? <SignInPage/> : <Redirect to='/'/>} />
            <Route exact path='/signup' render={() => user===null ? <SignUpPage/> : <Redirect to='/'/>}/>
            <Route exact path='/home' render={() => user===null ? <Redirect to='/'/> : <ProfilePage/>} />
          </Suspense>
        </Switch>
      </PagesStyles>
      </UserContext.Provider>
    </div>

  );
}

export default App;
