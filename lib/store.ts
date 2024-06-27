import { configureStore } from '@reduxjs/toolkit'
import  blogReducer  from './features/blog/BlogSlice'
import  blogDetailReducer  from './features/blog/BlogDetail'

export const makeStore = () => {
  return configureStore({
    reducer: {
      blogs: blogReducer,
      blogDetail: blogDetailReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']