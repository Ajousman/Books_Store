import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

const AboutUsButton = ({ destination = '/ContactUs' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit hover:bg-sky-700 transition-colors duration-200 flex items-center gap-2'
      >
        <BsInfoCircle className='text-2xl' />
        <span>About Us</span>
      </Link>
    </div>
  );
};

export default AboutUsButton;