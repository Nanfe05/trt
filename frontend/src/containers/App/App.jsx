import React,{useState} from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Home from '../../components/Home/home';
import About from '../../components/About/about';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import routes from '../../context/routes.json';


const DynamicHeight = (props) =>{
  return(<div className='dynamicHeght'>
    {props.children}
  </div>);
};

function App() {

  const [route,setRoute] = useState('/');



  return (
    <div title="application" className="App">
      <Router>
        <Header route={route} setRoute={setRoute}/>
          <DynamicHeight>
            <Switch>
              <Route path={`${routes.routes[1].path}`} component={()=><About/>}/>
              <Route path={`${routes.routes[0].path}`} component={()=><Home/>}/>
            </Switch>
          </DynamicHeight>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
