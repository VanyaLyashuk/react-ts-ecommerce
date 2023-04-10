import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Promo from '../promo/Promo';
import Favorites from '../favorites/Favorites';

function App() {
  return (
    <div className="App text-3xl">
      <header className="header">
        <Banner gist="sale"/>
        <Navbar />
      </header>
      <Promo />
      <Banner gist="note"/>
      <main className="main">
        <Favorites />
      </main>
    </div>
  )
}

export default App
