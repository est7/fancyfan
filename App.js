import React from 'react'
import { Provider } from 'react-redux'
import Store from './src/store/Store'
import Router from './src/AppRouter'

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation'

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class App extends React.Component {
  render () {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            id="root"
            initialRoute={Router.getRoute('home')}
          />
        </NavigationProvider>
      </Provider>
    )
  }
}
