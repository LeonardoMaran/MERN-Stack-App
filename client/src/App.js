import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import GuestState from './comtext/guestContext/GuestState'

function App() {
  return (
    <AuthState>
    <GuestState>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </GuestState>
  </AuthState>
  );
}

export default App;