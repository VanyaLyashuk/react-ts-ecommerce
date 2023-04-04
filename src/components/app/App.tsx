import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Promo from '../promo/Promo';
import './App.scss'

function App() {
  return (
    <div className="App text-3xl">
      <Banner gist="sale"/>
      <Navbar />
      <Promo />
      <Banner gist="note"/>
    </div>
  )
}

export default App
