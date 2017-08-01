/**
 * 创建Store,整合Provider
 */
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './../reducers/rootReducer'

let store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk),
  //下面这个配合redux devtools 使用
  //window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store