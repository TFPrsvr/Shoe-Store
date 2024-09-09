import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import {BrowserRouter ,Routes, Route} from 'react-router-dom';
// import {Link} from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <Routes> */}
      {/* <Route path='/' element={<App />}> */}

      {/* <Route path='gallery' element={<Gallery  />} /> */}
      {/* <Route path='menu' element={<Menu  />} /> */}
      {/* <Route path='nav' element={<Nav  />} />  */}
      {/* <Route path='product' element={<Product  />} />   */}
      {/* <Route path='cart' element={<Cart  />} />  */}
    
    <App />
    

      {/* </Route> */}
    {/* </Routes> */}
    {/* </BrowserRouter>  */}
  </StrictMode>,
)
