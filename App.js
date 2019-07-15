import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./navigation/AppStack";
import { Root } from "native-base";

export default function App() {
  return (
    <Root>
      <AppNavigator />
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
