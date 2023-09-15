import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import type {FC, ReactNode} from 'react';
import {AppNavigation} from './src/navigation';

export const navigationRef = createNavigationContainerRef();

interface INavigationProps {
  children: ReactNode;
}

const Navigation: FC<INavigationProps> = ({children}) => {
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide();
      }}
      ref={navigationRef}>
      {children}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Navigation>
      <AppNavigation />
    </Navigation>
  );
};

export default App;
