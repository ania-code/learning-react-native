import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen"
import ViewImageScreen from './screens/ViewImageScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});