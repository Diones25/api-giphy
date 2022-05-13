import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GifsTrending from "./components/pages/GifsTrending/GifsTrending.js";
import GifsSearch from "./components/pages/GifsSearch/GifsSearch.js";
import StickersSearch from "./components/pages/StickersSearch/StickersSearch.js";
import StickersTrending from "./components/pages/StickersTrending/StickersTrending.js";

import img from './assets/img/Giphy.jpg';

function App() {
  return (
    <>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <div class="row">
              <div class="col-md-6">
                <h1 class="display-5 fw-bold">Front-End API GIPHY</h1>
                <p>
                  Front-End da API GIPHY criado por mim disponivel nesse{" "}
                  <a href="https://github.com/Diones25/api-giphy">link</a>
                </p>
              </div>
              <div class="col-md-6">
                <img src={img} class="img-fluid img-thumbnail" alt="..." />
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
