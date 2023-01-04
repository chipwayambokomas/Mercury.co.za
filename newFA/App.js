import {View, Text} from 'react-native'
import React from 'react'
import Header from './src/Components/Layout/Header'
import HomeScreen from './src/Screens/HomeScreen'
import { Provider } from 'react-redux'
import Store from './Redux/Reducers/Store'



const App = () => 

{
  return(
    <Provider store={Store}>
      <Header />
      <HomeScreen />
    </Provider>
  )
}

export default App