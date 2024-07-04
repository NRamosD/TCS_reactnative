import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AddScreen from './screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
  {/* </ThemeProvider> */}
    // <NavigationContainer>
    //       </NavigationContainer>
  return (
    <Stack.Navigator initialRouteName='screens/HomeScreen'>
          <Stack.Screen
            name="screens/HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="screens/DetailsScreen" 
            component={DetailsScreen}
            options={{title: 'Details'}}
          />
          <Stack.Screen 
            name="screens/AddScreen" 
            component={AddScreen}
            options={{title: 'Add', headerShown: false}}
          />
        </Stack.Navigator>
      




    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
  );
}
