/**
 * Created by davidchains on 5/1/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './index';
import { emailChanged } from '../actions';

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="yourmail@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    >
                    </Input>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                    >

                    </Input>
                </CardSection>

                <CardSection>
                    <Button> Login </Button>
                </CardSection>

            </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

export default connect(mapStateToProps, {emailChanged})(LoginForm);