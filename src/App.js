import './App.css'
import Homepage from './page/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './page/shop/shop.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
