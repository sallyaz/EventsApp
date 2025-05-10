import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
  useSafeArea?: boolean;
}

const ScreenWrapper = ({
  children,
  backgroundColor,
  style,
  useSafeArea = true,
}: ScreenWrapperProps) => {
  const Container = useSafeArea ? SafeAreaView : View;

  return (
    <Container style={[styles.wrapper, { backgroundColor }, style]}>
      {children}
    </Container>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
