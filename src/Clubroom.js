import './Clubroom.css';
import PlanLayout from './Pages/Layouts/PlanLayout';
import Welcome from './Pages/Welcome';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppLayout from './Pages/Layouts/AppLayout';
import Home2 from "./Pages/Home2"; 
import Explore from "./Pages/Explore";

function Clubroom() {
  return(
    <BrowserRouter>
    <Route exact path={[
      "/rooms",
    ]}>
    <PlanLayout>
      <Switch >
        <Route exact path = "/rooms" component={Welcome} />
      </Switch>
   </PlanLayout>
   </Route>
   <Route exact path={["/home2","/explore"]}>
      <AppLayout> 
        <Switch>
          <Route exact path="/home2" component={() => <Home2/>} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </AppLayout>
   </Route>
   </BrowserRouter>
  ); 
}

export default Clubroom;
