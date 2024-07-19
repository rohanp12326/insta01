import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Username and Password are required.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'Password must contain lowercase, uppercase, digit and special character.',
      );
      return;
    }

    // Here you can handle the login logic, e.g., navigation or API call
    Alert.alert('Login Successful', `Welcome back, ${username}!`);
    navigation.navigate("Main");
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Navigation to forgot password screen.');
  };

  const handleFBLogin = () => {
    Alert.alert('Facebook Login', 'Facebook login flow initiates.');
  };

  const handleSignUp = () => {
    Alert.alert('Sign Up', 'Navigation to sign-up screen.');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(38, 38, 38, 0.7)"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={handleForgotPassword}
          style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/fb.png')}
            style={styles.fbLogo}
            resizeMode="cover"
          />
          <TouchableOpacity style={{marginLeft: 5}} onPress={handleFBLogin}>
            <Text style={styles.fbLoginText}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupLink}>Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.line} />
        <View style={{marginTop: 10}}>
          <Text style={styles.footerText}>Instagram or Facebook</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upper: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 10,
  },
  fbLogo: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 40,
  },
  input: {
    width: 343,
    height: 44,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    fontSize: 16,
    color: 'rgba(38, 38, 38, 1)',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 16,
    marginBottom: 30,
  },
  forgotText: {
    color: 'rgba(55, 151, 239, 1)',
    fontSize: 12,
    fontWeight: '500',
  },
  loginButton: {
    width: 343,
    height: 44,
    backgroundColor: 'rgba(55, 151, 239, 1)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  fbLogin: {
    width: 343,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fbLoginText: {
    color: 'rgba(37, 116, 169, 1)',
    fontSize: 14,
    fontWeight: '600',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  separatorText: {
    marginHorizontal: 10,
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 12,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 14,
  },
  signupLink: {
    color: 'rgba(55, 151, 239, 1)',
    fontSize: 14,
    fontWeight: '500',
  },
  footerText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
  },
});

export default LoginScreen;
