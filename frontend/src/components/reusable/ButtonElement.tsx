import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import colors from '../../constants/colors';

interface ButtonElementProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const ButtonElement: React.FC<ButtonElementProps> = ({
  title,
  color,
  style,
  onPress,
  disabled = false,
  ...rest
}) => {
  const enabledBgColor = color ?? colors.primary;
  const disabledBgColor = colors.lightGray;
  const backgroundColor = disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      style={[styles.button, style, {backgroundColor}]}
      onPress={disabled ? () => {} : onPress}
      activeOpacity={0.8}
      {...rest}>
      <Text
        style={[
          styles.text,
          {color: disabled ? colors.lightGray : colors.nearlyWhite},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonElement;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.8,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  } as ViewStyle,
  text: {
    textAlign: 'center',
    width: Dimensions.get('window').width * 0.8,
    fontSize: 16,
    fontWeight: '500',
  } as TextStyle,
});
