import React, {FC, ReactNode} from 'react';
import {View, StyleSheet, ScrollView, StyleProp, ViewStyle} from 'react-native';
import {AppText} from '../../ui/AppText';

type TableType = FC<{children: ReactNode | ReactNode[]}> & {
  Row: FC<{
    children: ReactNode | ReactNode[];
    withBg?: boolean;
    error?: boolean;
  }>;
  Cell: FC<{children: ReactNode; customStyles?: StyleProp<ViewStyle>}>;
};

const Row: FC<{
  children: ReactNode | ReactNode[];
  withBg?: boolean;
  error?: boolean;
}> = ({children, withBg, error}) => {
  return (
    <View
      style={{
        ...styles.row,
        backgroundColor: withBg ? '#FAF0E6' : error ? '#CD6688' : '#B9B4C7',
      }}>
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
      <AppText style={styles.cellText}>{children}</AppText>
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
  cellText: {
    fontSize: 12,
  },
});

Table.Row = Row;
Table.Cell = Cell;

export default Table;
