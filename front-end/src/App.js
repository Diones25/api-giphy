import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GifsTrending from "./components/pages/GifsTrending/GifsTrending.js";
import GifsSearch from "./components/pages/GifsSearch/GifsSearch.js";
import StickersSearch from "./components/pages/StickersSearch/StickersSearch.js";
import StickersTrending from "./components/pages/StickersTrending/StickersTrending.js";
import Footer from './components/Footer/Footer.js'
import NavBar from './components/NavBar/NavBar.js'


function App() {
  return (
    <>
      <NavBar />

      <Router>
        <Routes>
          <Route path="/" element={<GifsTrending />} />
          <Route path="/stickers/trending" element={<StickersTrending />} />
          <Route path="/gifs/search" element={<GifsSearch />} />
          <Route path="/stickers/search" element={<StickersSearch />} />
        </Routes>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
