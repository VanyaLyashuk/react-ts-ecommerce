import ProdCard from '../UI/ProdCard';

const Slider = () => {
  return (
    <section className="slider section">
      <div className="container mx-auto px-3">
        <h2 className="title text-left">New On Sale</h2>
        <ul className="slider-box inline-flex gap-4">
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </ul>
      </div>
    </section>
  )
}

export default Slider
