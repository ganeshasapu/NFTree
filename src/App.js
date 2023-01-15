import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Search } from './Pages/Search';
import { User } from './Pages/User';
import { SearchLanding } from './Pages/SearchLanding';
import { NftPage } from './Pages/nft';

// #0d1116
// #3eb550
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/search/:product" element={<SearchLanding/>} />
        <Route path="nft" element={<NftPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
