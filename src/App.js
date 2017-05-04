/**
 * Created by davidchains on 5/1/17.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import Router from './Routes'

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyDh9ohnFIqXKNgUw1i-FITw_V2YpyB3Xco',
            authDomain: 'manager-6557d.firebaseapp.com',
            databaseURL: 'https://manager-6557d.firebaseio.com',
            projectId: 'manager-6557d',
            storageBucket: 'manager-6557d.appspot.com',
            messagingSenderId: '1071254170436'
        };
        firebase.initializeApp(config);
    }

    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;