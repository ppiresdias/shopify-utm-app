// require('./bootstrap');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {AppProvider, Page, Card} from '@shopify/polaris'
import {Provider, TitleBar} from '@shopify/app-bridge-react'
import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateNewProductLink from './pages/links/CreateNewProductLink'
import ShowAllLinks from './pages/links/ShowAllLinks'

export default class App extends Component{

    render(){

        const config = {
            apiKey : document.getElementById("apiKey").value,
            shopOrigin : document.getElementById("shopOrigin").value,
            forceRedirect : true
        };

        return (
            <AppProvider>
                <Provider config={config}>
                    <Router>
                        <MainLayout>
                            <Switch>
                            <Route path="/app/links/product/new">
                               <CreateNewProductLink/>
                            </Route>
                            <Route path="/app/links/all">
                               <ShowAllLinks/>
                            </Route>
                            <Route path="/app/">
                                <Home />
                            </Route>
                            </Switch>
                        </MainLayout>
                    </Router>
                </Provider>
            </AppProvider>
        );
    }
}

if(document.getElementById('app')){
    ReactDOM.render(<App />, document.getElementById('app'))
}