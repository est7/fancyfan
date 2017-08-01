import { createRouter } from '@expo/ex-navigation'
import HomeScreen from './containers/HomeScreen'

const AppRouter = createRouter(() => ({
  home: () => HomeScreen,
}))

export default AppRouter