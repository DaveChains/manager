/**
 * Created by davidchains on 4/30/17.
 */

import {EMAIL_CHANGED} from './types'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text

    };
};