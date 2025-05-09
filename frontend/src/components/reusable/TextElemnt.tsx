import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';



interface TextElementProps extends Omit<TextProps, 'style'> {
  customStyle?: TextStyle;
  children: React.ReactNode;
  adjustsFontSizeToFit?: boolean;
}

const TextElement: React.FC<TextElementProps> = ({
  customStyle,
  children,
  onPress,
  adjustsFontSizeToFit = false,
}) => {
  
  return (
    <Text
      style={{
        ...customStyle,
        ...(customStyle?.fontWeight && { fontWeight: customStyle.fontWeight }),
      }}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      onPress={onPress}
      allowFontScaling={false}
     >
      {children}
    </Text>
  );
};

export default TextElement;
