import Banner from '../banner/Banner';
import Promo from '../promo/Promo';
import './App.scss'

function App() {
  return (
    <div className="App text-3xl">
      <Banner gist="sale"/>
      <Promo />
      <Banner gist="note"/>
    </div>
  )
}

export default App
