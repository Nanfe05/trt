import React,{useState} from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Home from '../../components/Home/home';
import About from '../../components/About/about';
import LogModal from '../LogModal/LogModal';
import Toast from '../../components/Toast/toast';

import '../../config/firebase';
import {CheckIfLogged} from '../../config/firebase';


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



function App(props) {

  const [route,setRoute] = useState('/');
  const [user,setUser] = useState('');
  const [modal,setModal] = useState('');
  const [appMsg,setAppMsg] = useState('');

  // Prevent firebase to run when testing
  if(!props.test){
    CheckIfLogged(user,setUser,setAppMsg);
  }
  
  // Set right route at init
  if(route !== window.location.pathname){
    setRoute(window.location.pathname);
  }

  return (
    <div title="application" className="App">
      <LogModal modal={modal} setModal={setModal} setUser={setUser} setAppMsg={setAppMsg}/>
      <Toast appMsg={appMsg} setAppMsg={setAppMsg}/>
      <Router>
        <Header route={route} setRoute={setRoute} user={user} setUser={setUser} setModal={setModal} setAppMsg={setAppMsg}/>
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
