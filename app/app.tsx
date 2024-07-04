import * as React from 'react';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar, StatusBarStyle, StyleSheet } from 'react-native';
import { TopBar } from '@/components/TopBar';
const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App = ({children}:any) => {

  return (
    <NavigationContainer >
      
      <StatusBar
        backgroundColor="#61dafb"
        barStyle={"default"}
      />
        {children}
        {/* Rest of your app code */}
    </NavigationContainer>
    
  );
};



export default App;