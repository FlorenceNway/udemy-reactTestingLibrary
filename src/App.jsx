import React, {useState, useEffect} from 'react';
import {hot} from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Products from './components/Products/Products';
import Routes from './pages/routes';
import productApi from './api/products.api';
import Nav from './components/Nav/Nav';
import About from './components/About';
import Home from './components/Home';

const App = () => {

    return (
            <main>
                <Nav/>
                <Switch>
                    <Route exact path='/form' component={Form} />
                    <Route exact path='/home' component={Products} />
                </Switch>
            </main>
    );
};

export default hot(module)(App);