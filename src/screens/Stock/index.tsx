import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Table from '../../components/blocks/Table';
import {usePollingFetch} from '../../api/usePollingFetch';
import {IMarket} from '../../types/IMarket';
import ScreenTitle from '../../components/ui/ScreenTitle';

const Stock = () => {
  const {data, error} = usePollingFetch<IMarket>();

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <ScreenTitle text="Котировки" />
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
              <Table.Cell customStyles={{width: '35%'}}>
                {item.displayName}
              </Table.Cell>
              <Table.Cell customStyles={{width: '20%'}}>
                {item.state}
              </Table.Cell>
              <Table.Cell customStyles={{width: '10%'}}>
                {item.symbolTradeLimit.highestBid}
              </Table.Cell>
              <Table.Cell customStyles={{width: '35%'}}>
                {item.visibleStartTime}
              </Table.Cell>
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
});

export default Stock;
