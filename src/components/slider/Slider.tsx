import { nanoid } from 'nanoid';
import sliderImg from '../../assets/prod1.jpg';

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

const ProdCard = () => {
  return (
    <li 
      className='w-full max-w-[265px] shrink-0 bg-white shadow-lg lg:max-w-[310px] xl:max-w-[340px]'
      key={nanoid()}>
      <div className='group w-full h-[265px] relative overflow-hidden lg:h-[310px] xl:h-[340px] cursor-pointer'>
        <img 
          className='w-full h-full object-cover object-center lg:group-hover:scale-110 transition-all divide-purple-500 ease-in'
          src={sliderImg} alt="" />
      </div>
      <div className="flex flex-col py-4 px-3 lg:py-5 lg:px-4">
        <h3 className="text-base font-bold mb-1 lg:text-xl">
          Air force 1 Low
        </h3>
        <p className={`text-sm lg:text-base`}>
          Multicolor, Now: $130
        </p>
        <div className="flex gap-1 items-center">
        </div>
      </div>
    </li>
  );
}

export default Slider
