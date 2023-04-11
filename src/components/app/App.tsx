import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Favorites from '../favorites/Favorites';
import Promo from '../promo/Promo';

function App() {
  return (
    <div className="App text-3xl">
      <header className="header">
        <Banner gist="sale"/>
        <Navbar />
      </header>
      <Hero />
      <Banner gist="note"/>
      <main className="main">
        <Favorites />
        <Promo />
      </main>
    </div>
  )
}

export default App
