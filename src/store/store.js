import { configureStore,} from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import { counterSlice } from './slices/counterSlice/counterSlice'
import { pokemonSlice } from './slices/pokemonSlice/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath] : todosApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(todosApi.middleware)

})