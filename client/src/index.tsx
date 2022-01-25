import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { StoreContext, stores } from './stores/rootStore'

ReactDOM.render(
  <StoreContext.Provider value={stores}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
)
