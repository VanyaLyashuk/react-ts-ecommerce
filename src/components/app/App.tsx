import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Favorites from '../favorites/Favorites';
import Promo from '../promo/Promo';
import Slider from '../slider/Slider';
import Newsletter from '../newsletter/Newsletter';
import { MainProdPage, ProductsPage } from '../pages';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App text-3xl">
      <header className="header">
        <Banner gist="sale"/>
        <Navbar />
      </header>
      {/* <Hero />
      <Banner gist="note"/>
      <main className="main">
        <Favorites />
        <Promo />
        <Slider />
        <Promo />
        <Slider />
        <Newsletter />
      </main> */}
      {/* <MainProdPage /> */}
      <ProductsPage />
      <Footer />
    </div>
  )
}

export default App
