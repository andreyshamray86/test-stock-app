import React, {FC, ReactNode} from 'react';
import {View, StyleSheet, ScrollView, StyleProp, ViewStyle} from 'react-native';
import {AppText} from '../../ui/AppText';

type TableType = FC<{children: ReactNode | ReactNode[]}> & {
  Row: FC<{children: ReactNode | ReactNode[]; withBg?: boolean}>;
  Cell: FC<{children: ReactNode; customStyles?: StyleProp<ViewStyle>}>;
};

const Row: FC<{children: ReactNode | ReactNode[]; withBg?: boolean}> = ({
  children,
  withBg,
}) => {
  return (
    <View
      style={{...styles.row, backgroundColor: withBg ? '#FAF0E6' : '#B9B4C7'}}>
      {children}
    </View>
  );
};

const Cell: FC<{
  children: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}> = ({children, customStyles}) => {
  return (
    <View style={[styles.cell, customStyles]}>
      <AppText>{children}</AppText>
    </View>
  );
};

const Table: TableType = ({children}) => {
  return <ScrollView style={styles.wrapper}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  cell: {
    flexGrow: 1,
  },
});

Table.Row = Row;
Table.Cell = Cell;

export default Table;
