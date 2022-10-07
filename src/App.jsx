import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  // const { pathname } = window.location;
  const [pathname, setPathname] = useState(window.location.pathname);
  let pageName = pathname === '/' ? 'root' : pathname.slice(1);

  window.onpopstate = e => {
    console.log('from', location.origin);
    console.log('to', location.pathname);
    pageName = e.state;
    return;
  };
  const pushState = () => {
    history.pushState('/', '', '/about');
  };

  return (
    <div className="App">
      <h1>Here are {pageName} page</h1>
      <div className="card">
        <button onClick={pushState}>go To About</button>
      </div>
    </div>
  );
}

export default App;
