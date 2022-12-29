import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from './store/store'
import './index.css'
import { ReduxApp } from './ReduxApp'
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <Provider store={store}>
     {/*  <PokemonApp /> */}
     <TodoApp/>
    </Provider>
  </React.StrictMode>,
)
