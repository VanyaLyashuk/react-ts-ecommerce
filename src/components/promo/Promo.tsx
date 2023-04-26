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
      <div className="section container mx-auto px-3">
        <h2 className="title">Meet the Riser</h2>
        <p className='text-center text-base mb-5 xl:mb-7'>Elevated design meets nature-made materials</p>
        <div className='flex justify-center gap-2'>
          <Btn className='btn btn--dark'>Shop Men</Btn>
          <Btn className='btn btn--dark'>Shop Women</Btn>
        </div>
      </div>
    </section>
  )
}

export default Promo
