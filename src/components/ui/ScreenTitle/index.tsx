import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from '../AppText';

interface Props {
  text: string;
}

const ScreenTitle: FC<Props> = ({text}) => {
  return <AppText style={styles.title}>{text}</AppText>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});

export default ScreenTitle;
