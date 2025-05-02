import './App.css';

import Header from './component/Header';
import Sidebar from './component/sidebar';
import Mainvid from './component/mainvid';
import Shorts from './component/shorts';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/7 bg-gray-100">
          {/* Sidebar takes 1/7th of screen */}
          <Sidebar />
        </div>
        <div className="flex-1 bg-white overflow-auto">
          {/* Main content takes the rest */}
          <Mainvid />
          <Shorts />
        </div>
      </div>
    </div>
  );
}

export default App;
