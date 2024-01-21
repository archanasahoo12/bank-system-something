import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='bg-primary-900 text-text-50'>
      <div className='max-w-full mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <span className='text-xl font-semibold ml-2'>
              <Link to='/' className='text-text-50'>
                Main Street Bank
              </Link>
            </span>
          </div>
          {/* Desktop navigation */}
          <div className='hidden md:flex md:items-center md:ml-10'>
            <ul className='flex space-x-4'>
              <li>
                <Link
                  to='/'
                  className='hover:bg-primary-800 px-3 py-2 rounded-md'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/transactions'
                  className='hover:bg-primary-800 px-3 py-2 rounded-md'
                >
                  Transactions
                </Link>
              </li>
              <li>
                <Link
                  to='/customers'
                  className='hover:bg-primary-800 px-3 py-2 rounded-md'
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to='/send-money'
                  className='hover:bg-primary-800 px-3 py-2 rounded-md'
                >
                  Send Money
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile navigation */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleNav} className='focus:outline-none'>
              {isNavOpen ? (
                <svg
                  className='h-6 w-6 fill-current text-text-50'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    id='close'
                    d='M6 18L18 6M6 6l12 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6 fill-current text-text-50'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    id='hamburger'
                    d='M4 6h16M4 12h16m-7 6h7'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isNavOpen ? '' : 'hidden'} bg-primary-900`}>
        <Link
          to='/'
          className='block px-4 py-2 rounded-md text-text-50 hover:bg-primary-800'
        >
          Home
        </Link>
        <Link
          to='/transactions'
          className='block px-4 py-2 rounded-md text-text-50 hover:bg-primary-800'
        >
          Transactions
        </Link>
        <Link
          to='/customers'
          className='block px-4 py-2 rounded-md text-text-50 hover:bg-primary-800'
        >
          Customers
        </Link>
        <Link
          to='/send-money'
          className='block px-4 py-2 rounded-md text-text-50 hover:bg-primary-800'
        >
          Send Money
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
