import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Button } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen"
import ViewImageScreen from './screens/ViewImageScreen'
import AppButton from './components/AppButton'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <AppButton title="Login"onPress={() => alert("button is tapped")}/>
</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});