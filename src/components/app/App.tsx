import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Promo from '../promo/Promo';
import './App.scss'

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
        <section className="our-favorites section">
          <div className="container mx-auto">
            <h2 className="title our-favorites__title">
              Our Favorites
            </h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
