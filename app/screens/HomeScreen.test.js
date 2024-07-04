// import { StatusBar } from "react-native";
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { StatusBar } from "expo-status-bar";
import { TopBar } from '@/components/TopBar';

it('renders correctly StatusBar', () => {
    const tree = renderer.create(<StatusBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly Topbar', () => {
    const tree = renderer.create(<TopBar />).toJSON();
    expect(tree).toMatchSnapshot();
});


// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import HomeScreen from '../HomeScreen'; // Ajusta la ruta según tu estructura de carpetas
// import { NavigationContainer } from '@react-navigation/native';
// import renderer from 'react-test-renderer';
// import { View } from 'react-native';

// it(`renders correctly Home Screen`, () => {
//     const tree = renderer.create(<View>Snapshot test!</View>).toJSON();
  
//     expect(tree).toMatchSnapshot();
// });
  


// // Mock de los componentes importados
// jest.mock('@/components/TopBar', () => () => <Text>TopBar</Text>);
// jest.mock('@/components/SearchInput', () => () => <Text>SearchInput</Text>);
// jest.mock('@/components/ShowFinancialProducts', () => () => <Text>ShowFinancialProducts</Text>);

// // describe('HomeScreen', () => {
//   test('verifies that TopBar component is rendered', () => {
//     const { getByText } = render(
//       <NavigationContainer>
//         <HomeScreen />
//       </NavigationContainer>
//     );

//     const topBar = getByText('TopBar');
//     expect(topBar).toBeTruthy();
//   });

//   test('verifies that SearchInput component is rendered', () => {
//     const { getByText } = render(
//       <NavigationContainer>
//         <HomeScreen />
//       </NavigationContainer>
//     );

//     const searchInput = getByText('SearchInput');
//     expect(searchInput).toBeTruthy();
//   });

//   test('verifies that ShowFinancialProducts component is rendered', () => {
//     const { getByText } = render(
//       <NavigationContainer>
//         <HomeScreen />
//       </NavigationContainer>
//     );

//     const showFinancialProducts = getByText('ShowFinancialProducts');
//     expect(showFinancialProducts).toBeTruthy();
//   });

//   test('verifies that navigation works when pressing ADD button', () => {
//     const { getByText } = render(
//       <NavigationContainer>
//         <HomeScreen />
//       </NavigationContainer>
//     );

//     const addButton = getByText('ADD');
//     fireEvent.press(addButton);

//     // Aquí puedes verificar que la navegación se haya llamado con el argumento correcto
//     // Si usas mocks, podrías usar expect(navigation.navigate).toHaveBeenCalledWith('screens/AddScreen');
//   });
// // });
