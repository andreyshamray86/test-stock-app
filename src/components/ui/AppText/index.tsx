import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface IStyle {
  [key: string]: any;
}

export const AppText = (props: {
  numberOfLines?: number;
  style?: IStyle;
  children: React.ReactNode;
}) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props?.numberOfLines || undefined}
      style={{...styles.default, ...props.style}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: '#352F44',
  },
});
