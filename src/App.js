import './App.css';
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import ProdList from './screens/ProdList';

function App() {
  return (
    <Router> 
    <div> 
      <Routes>

      <Route  exact path = "/" element={ <Home></Home> }  />
      <Route  exact path = "/login" element={ <LogIn></LogIn> }  />
      <Route  exact path = "/signup" element={ <SignUp></SignUp> }  />
      <Route  exact path = "/prodlist" element={ <ProdList></ProdList> }  />



      </Routes>
       </div>
  </Router>
  );
}

export default App;
