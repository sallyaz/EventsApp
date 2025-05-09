import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import colors from '../../constants/colors';

interface TextElementProps extends Omit<TextInputProps, 'onChangeText'> {
  placeholder?: string;
  size?: number;
  onInputChange: Function;
  errorMessage?: string;
}

const InputElement: React.FC<TextElementProps> = ({
  placeholder,
  size = 22,
  onInputChange,
  errorMessage,
  ...inputProps
}) => {
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={colors.textColor}
          placeholder={placeholder}
          autoCapitalize="none"
          style={styles.input}
          cursorColor={colors.textColor}
          //@ts-ignore
          onChangeText={onInputChange}
          {...inputProps}
        />
      </View>

      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width * 0.8,
    marginBottom: 20,
  },
  inputContainer: {
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',

  },
  input: {
    color: colors.textColor,
    width: '100%',
  } ,
  errorContainer: {
    marginBottom: 10,
  } ,
  errorText: {
    color: colors.error,
    fontSize: 13,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    textAlign: 'left',
  } ,
});

export default InputElement;
