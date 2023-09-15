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

      async function fetchWithTimeout(url: string) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(url, {
          signal: controller.signal,
        });
        clearTimeout(id);

        return response;
      }

      const fetchData = async () => {
        try {
          const response = await fetchWithTimeout(
            `${BASE_URL}/markets/ticker24h`,
          );
          const fetchedData = await response.json();
          setData(fetchedData);
          setError(null);
        } catch (err) {
          setError('Ошибка');
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
