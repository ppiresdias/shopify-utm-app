// require('./bootstrap');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {AppProvider, Page, Card} from '@shopify/polaris'
import {Provider, TitleBar} from '@shopify/app-bridge-react'
import Dashboard from './components/Dashboard'

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
                    <TitleBar title="Polaris Demo" />
                    <Page title="UTM Dashboard">
                        <Card title="Online store dashboard" sectioned>
                            <p>View a summary of your online store’s performance.</p>
                        </Card>
                    </Page>
                    <Dashboard/>
                </Provider>
            </AppProvider>
        );
    }
}

if(document.getElementById('app')){
    ReactDOM.render(<App />, document.getElementById('app'))
}