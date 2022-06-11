import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link,} from 'react-router-dom'
import Products from './Components.js/Products'
import Productsone from './Components.js/Productsone'


function App() {
  return (
    <Router>
    <div>App
      
      <Link to='/'>All Products</Link>
      <Link to='/orange'>Orange</Link>
        
    </div>


    <Switch>
        <Route exact path='/'>
            <Products/>
        </Route>
       
        
       
        
        <Route path='/products/:id'>
          <Productsone/>
          </Route>
        
          
    </Switch>
    </Router>




  )
}

export default App