import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';
import RouteList from './RouteList';

function App() {
  return (
    <div className="App">
      <h1>Doggies!</h1>
      <BrowserRouter>
        <RouteList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
