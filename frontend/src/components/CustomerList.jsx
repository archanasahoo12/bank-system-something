import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your Navbar component here
import axios from 'axios';
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Throttle the function to execute only once per second
    const fetchCustomersThrottled = throttle(fetchCustomers, 1000);
    fetchCustomersThrottled();
  }, []);

  const fetchCustomers = () => {
    setIsFetching(true);
    axios
      .get('http://localhost:3000/api/users/users')
      .then((response) => {
        setCustomers(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error('Error fetching customers:', error);
        setIsFetching(false);
      });
  };

  // Throttle function to control the execution rate
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // 5296
  // 5742001452
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.firstName &&
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className='bg-background-50 h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Customer List */}
      <div className='container mx-auto p-4 text-text-900'>
        <h1 className='text-primary-color-2xl font-bold mb-4'>Customers</h1>
        {/* Search Input */}
        <input
          type='text'
          placeholder='Search by name...'
          value={searchTerm}
          onChange={handleSearch}
          className='border p-2 rounded mb-4'
        />
        {/* List of Customers */}
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {filteredCustomers.map((customer) => (
            <div
              key={customer._id}
              className='bg-white p-4 rounded shadow cursor-pointer text-text-900'
              onClick={() => handleCustomerClick(customer)}
            >
              <h2 className='text-lg font-semibold mb-2'>
                {customer.firstName}
              </h2>
              <p className='text-sm text-gray-500'>{customer.email}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCustomer && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-6 rounded-lg'>
              <h2 className='text-lg font-semibold mb-2'>
                {selectedCustomer.name}
              </h2>
              <p className='text-sm text-gray-500'>
                Email: {selectedCustomer.email}
              </p>
              <p className='text-sm text-gray-500'>
                Account Balance: {selectedCustomer.balance}
              </p>
              <p className='text-sm text-gray-500'>
                Account Number: {selectedCustomer.accountNumber}
              </p>
              <button
                onClick={closeModal}
                className='mt-4 px-4 py-2 bg-primary-color-500 text-black rounded hover:bg-primary-color-600'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
