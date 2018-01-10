/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow

aws mobile hub getting started:
https://docs.aws.amazon.com/aws-mobile/latest/developerguide/react-native-getting-started.html#react-native-getting-started-configure-aws-amplify

aws-amplify-react-native quick start:
https://github.com/aws/aws-amplify/blob/master/media/quick_start.md#react-native-development

connect backend:
https://docs.aws.amazon.com/aws-mobile/latest/developerguide/react-native-getting-started.html#react-native-getting-started-configure-aws-amplify

signin:
https://docs.aws.amazon.com/aws-mobile/latest/developerguide/react-native-add-user-sign-in.html#connect-to-your-backend

analytics:
https://docs.aws.amazon.com/aws-mobile/latest/developerguide/react-native-add-analytics.html#add-custom-analytics-to-your-app
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './signupStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Amplify, { withAuthenticator, Storage, Authenticator,SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react-native';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      fileName:'someTextFile.txt',
      username: 'lauren',
      password: 'Abc123!!',
      email: 'laurenwdunlap@gmail.com',
      phone: '+12485350504'
    }
  }

  register() {
    console.warn('registering user via cognito');

  }
  /*
  async uploadFile() {
    let file = 'some content here';
    const access = {level: 'private'};
    Storage.put(this.state.fileName, file, access);
   // this will add a text file to a user provisioned directory in s3 for the project
  }
  async getFile() {
    const access = { level: 'private' };
    let fileURL = await Storage.get(this.state.fileName, access);
  }
  */
  loginWithFacebook() {
    console.warn('to do...');
  }

  render() {
    //Storage.put('welcome.txt', 'hello world', {level: 'private'});
    return (
      <View style={styles.container}>
        <View style={styles.federatedContainer}>
          <Text style={styles.federatedText}>Sign up with</Text>
          <TouchableOpacity onPress={this.loginWithFacebook} style={styles.fbBtn}>
            <FontAwesome name='facebook' size={20} color="#60a0e5" />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.inputContainer}>
          <View style={styles.inputSection}>
            <FontAwesome name="id-card-o" style={styles.inputImage} />
              <TextInput
                style={styles.input}
                placeholder='username'
                placeholderTextColor='#b6ccef'
                onChangeText={(userame) => this.setState({username})}
                value={this.state.username}
                autoCapitalize='none'
                keyboardType='default'
                autoCorrect={false}
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.inputSection}>
              <FontAwesome name="envelope-o" style={styles.inputImage} />
              <TextInput
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor='#b6ccef'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                  />
            </View>
            <View style={styles.inputSection}>
              <FontAwesome name="key" style={styles.inputImage} />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    placeholderTextColor='#b6ccef'
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    autoCapitalize='none'
                    keyboardType='default'
                    autoCorrect={false}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                  />
            </View>
            <View style={styles.inputSection}>
                <FontAwesome name="phone" style={styles.inputImage} />
                  <TextInput
                    style={styles.input}
                    placeholder='phone'
                    placeholderTextColor='#b6ccef'
                    onChangeText={(phone) => this.setState({phone})}
                    value={this.state.phone}
                    autoCapitalize='none'
                    keyboardType='default'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                  />
            </View>
          </View>
          <TouchableOpacity onPress={ () => this.register } style={styles.confirmBtn} >
              <Text style={styles.h1Text}> Sign Up </Text>
          </TouchableOpacity>
      </View>

    );
  }
}

//export default withAuthenticator(App);
/*

<Authenticator hideDefault={true} onStateChange={this.handleAuthStateChange}>
    <SignIn/>
    <SignUp/>
    <ConfirmSignUp/>
    <Greetings/>
    <AlwaysOn/>
</Authenticator>

const AlwaysOn = (props) => {
    return (
      <View>
        <Text>Auth state {props.authState}</Text>
      </View>
    )
}

handleAuthStateChange(state) {
  if (state === 'signedIn') {
    console.warn('signed in');
  }
}

*/
