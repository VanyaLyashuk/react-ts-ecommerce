import Banner from "../banner/Banner";
import Hero from "../hero/Hero";
import Favorites from "../favorites/Favorites";
import Promo from "../promo/Promo";
import Slider from "../slider/Slider";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";


const Mainpage = () => {
  return (
    <>
      <Hero />
      <Banner gist="note" />
      <main className="main">
        <Favorites />
        <Promo />
        <Slider />
        <Promo />
        <Slider />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Mainpage;
