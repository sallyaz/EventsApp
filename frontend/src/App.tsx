// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AppNavigation from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
     </Provider>

  );
}
