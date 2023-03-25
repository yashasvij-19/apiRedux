import "./App.css";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Productdetails from './components/Productdetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route path ="/" element={<ProductListing />} />
      <Route path ="/product/:productId" element={<Productdetails />} />
      <Route>404 Not Found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
