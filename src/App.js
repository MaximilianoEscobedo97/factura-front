import 'bootstrap/dist/css/bootstrap.min.css';
import {ListCfdi} from './pages/cfdi/list';
import {CreateCfdi} from './pages/cfdi/create';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route  path='/'  component={ListCfdi}/>
          <Route  path='/create'  component={CreateCfdi}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
