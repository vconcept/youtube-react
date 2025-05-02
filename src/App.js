import './App.css';

import Header from './component/Header';
import Sidebar from './component/sidebar';
import Mainvid from './component/mainvid';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-100">
          <Sidebar />
        </div>
        <Mainvid />
      </div>
    </div>
  );
}

export default App;
