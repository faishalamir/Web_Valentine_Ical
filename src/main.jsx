import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/Style/Style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
import 'materialize-css/dist/css/materialize.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
