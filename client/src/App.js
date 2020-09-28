import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Redux
import store from './store';
import { Provider } from 'react-redux';

import './App.css';

const App = () => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={Landing} />

                <section className='container'>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                    </Switch>
                </section>
            </BrowserRouter>
        </Provider>
    </>
);

export default App;
