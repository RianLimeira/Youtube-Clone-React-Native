import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { styled } from 'nativewind';
import Header from './src/components/Header';
import List from './src/components/List';

const ViewStyled = styled(View);
const TextStyle = styled(Text)




export default function App() {
  return (
    <ViewStyled className={'flex-1 bg-zinc-800'}>
      <Header />
      <List />   
        <StatusBar style='auto' />
    </ViewStyled>
  );
}
