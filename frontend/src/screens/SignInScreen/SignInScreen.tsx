import React, {useState} from 'react';
import {Alert, Image, Keyboard, StyleSheet, View} from 'react-native';

// Components
import ButtonElement from '../../components/reusable/ButtonElement';
import InputElement from '../../components/reusable/InputElement';

// Utils
import {ErrorState, FormState} from '../../types/types';
import {validateForm} from '../../utils/formValidator';

// Redux
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useLoginMutation} from '../../services/auth/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAuthenticated} from '../../services/auth/authSlice';

type FieldKey = 'email' | 'password';

const formFields: {
  key: FieldKey;
  placeholder: string;
  secure?: boolean;
}[] = [
  {key: 'email', placeholder: 'Email'},
  {key: 'password', placeholder: 'Password', secure: true},
];

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  const [login, {error: signInError}] = useLoginMutation();

  const [formState, setFormState] = useState<FormState>(() =>
    Object.fromEntries(formFields.map(f => [f.key, ''])),
  );
  const {email, password} = formState;

  const [formErrors, setFormErrors] = useState<ErrorState>(() =>
    Object.fromEntries(formFields.map(f => [`${f.key}Error`, ''])),
  );

  const secureTextEntry = true;

  const updateState = (key: string, value: string) => {
    setFormState(prev => ({...prev, [key]: value}));
    setFormErrors(prev => ({...prev, [`${key}Error`]: ''}));
  };

  const onSubmit = async () => {
    try {
      Keyboard.dismiss();
      const isValid = validateForm(
        formState.email,
        formState.password,
        setFormErrors,
      );
      if (isValid) {
        const res = await login({email, password}).unwrap();
        await AsyncStorage.setItem('userName', res.userName);
        dispatch(setAuthenticated(true));
      }
    } catch (e) {
      console.warn('Login failed:', e);
      Alert.alert(
        'Login Failed',
        signInError ? JSON.stringify(signInError) : 'Invalid credentials',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/SignIn/event_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View>
        {formFields.map(({key, placeholder, secure}) => (
          <InputElement
            key={key}
            placeholder={placeholder}
            value={formState[key]}
            onInputChange={(value: string) => updateState(key, value)}
            secureTextEntry={secure ? secureTextEntry : false}
            errorMessage={formErrors[`${key}Error`]}
            style={styles.input}
          />
        ))}
      </View>

      <ButtonElement title="Login" onPress={onSubmit} style={styles.button} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    marginBottom: 5,
    width: '80%',
  },
  button: {
    marginTop: 10,
  },
});
