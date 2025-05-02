import './App.css';

import Header from './component/Header';
import Sidebar from './component/sidebar';
import Mainvid from './component/mainvid';
import Shorts from './component/shorts';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Shorts />
      <Mainvid />
    </div>
  );
}

export default App;
