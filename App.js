import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Button } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen"

export default function App() {
  return (
    <WelcomeScreen></WelcomeScreen>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});