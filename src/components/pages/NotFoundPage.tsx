import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-full px-3 py-[60px] mx-auto min-h-[50vh]">
      <p className="font-bold leading-none text-[80px] lg:text-[120px]">404</p>
      <h2 className="text-[30px] leading-snug mb-1 lg:text-[36px] lg:mb-2">Page not found</h2>
      <Link to="/" className='text-sm underline lg:text-base'>Return to the Main Page?</Link>
    </div>
  )
}

export default NotFoundPage
