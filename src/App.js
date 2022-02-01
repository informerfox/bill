import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className='app'>
   <Navbar/>
   <Products/>
   <Receipt/>
   </div>
  );
}

export default App;
