/**
 * Created by davidchains on 5/1/17.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';

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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;