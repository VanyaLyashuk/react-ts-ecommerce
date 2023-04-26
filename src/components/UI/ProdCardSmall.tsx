import { nanoid } from 'nanoid';
import sliderImg from '../../assets/prod1.jpg';

const ProdCardSmall = () => {
  return (
    <li 
      className='w-full max-w-[165px] bg-white shadow-lg lg:max-w-[175px] xl:max-w-[210px]'
      key={nanoid()}>
      <div className='group w-full relative overflow-hidden cursor-pointer h-[165px] lg:h-[175px] xl:h-[210px]'>
        <img 
          className='w-full h-full object-cover object-center lg:group-hover:scale-110 transition-all divide-purple-500 ease-in'
          src={sliderImg} alt="" />
      </div>
      <div className="flex flex-col py-4 px-3 lg:py-5 lg:px-4">
        <h3 className="text-sm font-bold xl:text-base">
          Air force 1 Low
        </h3>
      </div>
    </li>
  );
}

export default ProdCardSmall;