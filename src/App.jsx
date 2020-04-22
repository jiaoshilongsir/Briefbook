import React from 'react';
import Header from './common/header/index.js'
import {BrowserRouter,Route} from 'react-router-dom' 
import Detail from './pages/detail/loadable.js'
import Home from './pages/home'
import Login from './pages/login'
import Writer from './pages/writer'
function App() {
  return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' component={Login}></Route> 
          <Route path='/writer' component={Writer}></Route> 
          <Route path='/detail/:id' component={Detail}></Route>  
        </div>
      </BrowserRouter>
  );
}

export default App;
