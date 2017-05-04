/**
 * Created by dcadenas on 04-05-2017.
 */

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle{{ paddingTop: 65}}>
            <Scene
                key="login"
                component={LoginForm}
                title="Please Login"
            />
            <Scene
                key="employeeList"
                component={EmployeeList}
                title="Employees"
                initial
            />

        </Router>
    );
};

export default RouterComponent;