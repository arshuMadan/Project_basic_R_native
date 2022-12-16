import React, { Component } from 'react'
import {Text, SafeAreaView} from 'react-native'
import RoutApp from './src2/route/index.js'
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux'
import {Store} from './src2/redux/store.js'
export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <RoutApp/>
      </Provider>
    );
  }
}

export default App