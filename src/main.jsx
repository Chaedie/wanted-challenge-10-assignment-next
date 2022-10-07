import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Router>
  //   <Route path="/" component={<Root />} />
  //   <Route path="/about" component={<About />} />
  // </Router>

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
