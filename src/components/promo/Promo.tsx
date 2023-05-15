import { Link } from 'react-router-dom';
import Btn from '../UI/Btn';
import promoImg from '../../assets/promo-img01.jpg';
import promoImgMob from '../../assets/promo-img01--mob.jpg';

const Promo = () => {
  return (
    <section className="promo">
      <div className='w-full h-[325px] min-h-[325px] overflow-hidden md:h-[375px] lg:h-[525px]'>
        <picture>
          <source media="(min-width: 650px)" srcSet={promoImg} />
          <img 
            className='object-cover object-center w-full h-[480px] md:h-[640px] lg:h-[845px] xl:h-[1200px] 2xl:h-[1917px]'
            src={promoImgMob} alt=""/>
        </picture>
      </div>
      <div className="container px-3 mx-auto section">
        <h2 className="title">Meet the Riser</h2>
        <p className='mb-5 text-base text-center xl:mb-7'>Elevated design meets nature-made materials</p>
        <div className='flex justify-center gap-2'>
          <Link to="/products/mens" className='btn btn--dark'>Shop Men</Link>
          <Link to="/products/womens" className='btn btn--dark'>Shop Women</Link>
        </div>
      </div>
    </section>
  )
}

export default Promo
