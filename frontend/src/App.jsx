import './App.css';
import Navbar from './components/Navbar';
import CustomerCard from './components/CustomerCard';
import ReviewSection from './components/ReviewSection';
import HowItWorksSection from './components/HowItWorksSection';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-background-50'>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-8 text-text-900'>
          Welcome to Our Bank
        </h1>

        {/* About the Bank Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            About Our Bank
          </h2>
          <p className='text-lg text-text-700'>
            We offer secure and reliable banking services to meet your financial
            needs. Our commitment is to provide the best customer experience and
            financial solutions tailored to your requirements.
          </p>
        </section>

        {/* Customer Cards Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            Our Valued Customers
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <CustomerCard name='Customer 1' />
            <CustomerCard name='Customer 2' />
            <CustomerCard name='Customer 3' />
          </div>
        </section>

        {/* Review Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            Customer Reviews
          </h2>

          <ReviewSection />
        </section>

        {/* How It Works Section */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            How It Works
          </h2>

          <HowItWorksSection />
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-text-800'>
            Explore More with Our Services
          </h2>
          <p className='text-lg text-text-700 mb-8'>
            Discover a wide range of financial services and products designed to
            meet your unique needs. Whether you're saving for the future,
            managing investments, or planning for a major purchase, we've got
            you covered.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>Personal Savings</h3>
              <p className='text-gray-600'>
                Start saving for your goals with our flexible and rewarding
                personal savings accounts.
              </p>
            </div>
            <div className='bg-white p-6 rounded shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>
                Investment Planning
              </h3>
              <p className='text-gray-600'>
                Explore investment options and create a plan tailored to your
                financial aspirations.
              </p>
            </div>
            <div className='bg-white p-6 rounded shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>Home Loans</h3>
              <p className='text-gray-600'>
                Achieve homeownership with our flexible and affordable home loan
                solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
      <footer className='bg-footer py-4'>
        <div className='max-w-7xl mx-auto px-4'></div>
      </footer>
    </div>
  );
}

export default App;
