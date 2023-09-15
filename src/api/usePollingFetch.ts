import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {BASE_URL} from './variables';

export const usePollingFetch = <T>() => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      const stopPolling$ = new Subject();

      const fetchData = async () => {
        try {
          setError(null);
          const response = await fetch(`${BASE_URL}/markets`);
          const fetchedData = await response.json();
          setData(fetchedData);
        } catch (err) {
          setError('Error');
        }
      };

      const pollingSubscription = interval(5000)
        .pipe(takeUntil(stopPolling$))
        .subscribe(() => {
          fetchData();
        });

      return () => {
        setData(null);
        stopPolling$.next({});
        stopPolling$.complete();
        pollingSubscription.unsubscribe();
      };
    }, []),
  );

  return {data, error};
};
