import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {AppText} from '../../components/ui/AppText';
import Table from '../../components/blocks/Table';
import {usePollingFetch} from '../../api/usePollingFetch';
import {IMarket} from '../../types/IMarket';

const Stock = () => {
  const {data, error} = usePollingFetch<IMarket>();

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <AppText style={styles.title}>Котировки</AppText>
      </View>
      {data || error ? (
        <Table>
          {error ? (
            <Table.Row>
              <Table.Cell>{error}</Table.Cell>
            </Table.Row>
          ) : null}
          {data?.map((item, idx) => (
            <Table.Row key={item.symbol} withBg={idx % 2 !== 0}>
              <Table.Cell customStyles={{width: '30%'}}>
                {item.displayName}
              </Table.Cell>
              <Table.Cell>{item.state}</Table.Cell>
              <Table.Cell>{item.symbolTradeLimit.highestBid}</Table.Cell>
              <Table.Cell>{item.visibleStartTime}</Table.Cell>
            </Table.Row>
          ))}
        </Table>
      ) : (
        <View style={styles.spinnerWrapper}>
          <ActivityIndicator size="large" color="#352F44" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingTop: 12,
  },
  spinnerWrapper: {
    paddingTop: 12,
  },
  titleWrapper: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
  },
});

export default Stock;
