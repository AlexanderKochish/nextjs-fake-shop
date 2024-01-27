import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './features/products/productsSlice'
import searchSlice from './features/search/searchSlice'
import cartSlice from './features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      search: searchSlice,
      cart: cartSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']