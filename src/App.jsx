import { Outlet } from 'react-router-dom';

import MenuBar from './component/menuBar';

import './App.css';



function App() {

  return (
    <div className="p-4 bg-[url(./assets/sfondo.jpeg)] min-h-screen">
      <div className="fixed left-0 h-full w-52 bg-zinc-800/75">
          <MenuBar />
      </div>
      <div className="pl-56">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
