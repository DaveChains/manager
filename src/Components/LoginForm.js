/**
 * Created by davidchains on 5/1/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './index';
import { emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser( { email, password } );
    }

    renderButton(){
        if (this.props.loading){
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    >

                    </Input>
                </CardSection>

                <Text style={styles.ErrorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading   };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})(LoginForm);