import { createStore, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { postsReducer } from './postsReducer'

export const store = createStore(postsReducer, applyMiddleware(ThunkMiddleware))
