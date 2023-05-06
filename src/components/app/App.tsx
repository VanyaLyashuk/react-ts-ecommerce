import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Favorites from '../favorites/Favorites';
import Promo from '../promo/Promo';
import Slider from '../slider/Slider';
import Newsletter from '../newsletter/Newsletter';
import { MainProdPage, ProductsList } from '../pages';
import Footer from '../footer/Footer';
import Cart from '../cart/Cart';

function App() {
  return (
    <div className="text-3xl App">
      <header className="header">
        <Banner gist="sale"/>
        <Navbar />
      </header>
      <Hero />
      <Banner gist="note"/>
      <main className="main">
        <Favorites />
        <Promo />
        <Slider />
        <Promo />
        <Slider />
        <Newsletter />
      </main>
      {/* <MainProdPage /> */}
      {/* <ProductsList /> */}
      <Footer />
      {/* <Cart /> */}
    </div>
  )
}

export default App
