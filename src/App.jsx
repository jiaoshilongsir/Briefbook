import React from 'react';
import Header from './common/header/index.js'
import {BrowserRouter,Route} from 'react-router-dom' 
import Detail from './pages/detail'
import Home from './pages/home'
function App() {
  return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route> 
          <Route path='/detail' component={Detail}></Route>  
        </div>
      </BrowserRouter>
  );
}

export default App;
