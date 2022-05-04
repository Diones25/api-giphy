import GifsSearch from "./components/GifsSearch";
import StickersSearch from "./components/StickersSearch";
import GifsTrending from "./components/GifsTrending";
import StickersTrending from './components/StickersTrending';

function App() {
  return (
    <>
      <h1>API de Gifs</h1>
      <GifsSearch />
      <StickersSearch />
      <GifsTrending />
      <StickersTrending />
    </>
  );
}

export default App;
