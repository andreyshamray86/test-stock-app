import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenTitle from '../../components/ui/ScreenTitle';

const About = () => {
  return (
    <View style={styles.wrapper}>
      <ScreenTitle text="О приложении" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingTop: 12,
  },
  text: {
    fontSize: 30,
  },
});

export default About;
