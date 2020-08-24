import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import Header from './components/header/header';
import { GlobalStyles } from './globalstyles';


function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/signin' component={SignInPage} />
        <Route exact path='/signup' component={SignUpPage} />
      </Switch>
    </div>

  );
}

export default App;
