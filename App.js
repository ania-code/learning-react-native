import React from 'react'
import { View } from 'react-native'
import CardComponent from './components/CardComponent'

export default function App() {
  return <View style={{
              backgroundColor: '#f8f4f4',
              padding: 20,
              paddingTop: 100,
          }}>
          <CardComponent 
            title="Red jacket for sale"
            subTitle="100$"
            image={require('./assets/jacket.jpg')} />
    </View>
}

// import React from "react";
// import { StyleSheet } from "react-native";
// import WelcomeScreen from "./screens/WelcomeScreen"

// export default function App() {
//   return (
//     <WelcomeScreen></WelcomeScreen>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// });