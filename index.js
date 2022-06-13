/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import * as React from 'react';
import Router from './src/Router';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import storage from '@/Storages/store';

const {store, persistor} = storage();

function Main() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
