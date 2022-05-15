import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GifsTrending from "./components/pages/GifsTrending/GifsTrending.js";
import GifsSearch from "./components/pages/GifsSearch/GifsSearch.js";
import StickersSearch from "./components/pages/StickersSearch/StickersSearch.js";
import StickersTrending from "./components/pages/StickersTrending/StickersTrending.js";

import img from './assets/img/Giphy.jpg';

function App() {
  return (
    <>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-5 fw-bold">Front-End API GIPHY</h1>
                <p>
                  Front-End da API GIPHY criado por mim disponivel nesse{" "}
                  <a href="https://github.com/Diones25/api-giphy">link</a>
                </p>
              </div>
              <div className="col-md-6">
                <img src={img} className="img-fluid img-thumbnail" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<GifsTrending />} />
          <Route path="/stickers/trending" element={<StickersTrending />} />
          <Route path="/gifs/search" element={<GifsSearch />} />
          <Route path="/stickers/search" element={<StickersSearch />} />
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
