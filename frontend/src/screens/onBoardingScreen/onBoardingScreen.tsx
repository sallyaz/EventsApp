import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { navigate } from '../../utils/navigationRef';
import TextElement from '../../components/reusable/TextElement';
import ButtonElement from '../../components/reusable/ButtonElement';

const OnBoardingScreen: React.FC = () => {
  const handleSignInNavigation = () => {
    navigate('signIn');
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/onBoarding/events.png')}
        style={styles.image}
        accessibilityLabel="Events illustration"
      />

      <View style={styles.titleContainer}>
        <TextElement customStyle={styles.titleText}>Welcome To</TextElement>
        <TextElement customStyle={styles.titleSubText}>RSVP Events</TextElement>
      </View>

      <TextElement customStyle={styles.subtitleText}>
        Easily manage your events invitation and RSVPs.
      </TextElement>

      <View style={styles.buttonContainer}>
        <ButtonElement title="Let's Begin" onPress={handleSignInNavigation} />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  titleContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleSubText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    width: '60%',
  },
});
