/**
 * Created by davidchains on 5/10/17.
 */

import {
    EMPLOYEE_UPDATE,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value}
    };
};


export const employeeCreate = ({ name, phone, shift }) => {
    console.log( name, phone, shift );
};