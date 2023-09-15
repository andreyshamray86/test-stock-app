import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../components/ui/AppText';

const About = () => {
  return (
    <View style={styles.wrapper}>
      <AppText style={styles.text}>О приложении</AppText>
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
