import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/FooterComp';

import { loginContext } from './Context/Context';

function App() {
  return (
    <div className="App">
      <loginContext.Provider value={null}>
        <NavbarComp />
        <Footer />
      </loginContext.Provider>
    </div>
  );
}

export default App;
