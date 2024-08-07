import React, { useState, useEffect } from 'react';

const FakePayment = () => {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 2500); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      {isProcessing ? (
        <div className='rounded-full w-64 h-64  -auto bg-custom'>
        <div className="relative flex items-center justify-center p-2 rounded-full w-64 h-64  -auto bg-custom">
          <div className="w-60 h-60 bg-custom  border-y-8 border- bg- border-whie border-solid rounded-full animate-ring"></div>
          <div className="absolute text-2xl font-bold text-white p-4 m-2">Processing.. </div>
        </div>
        </div>
      ) : (
        <div className="text-center ">
          <h1 className="text-4xl font-semibold text-red-500 p-2">Server is down ⚠️</h1>
          <p className="text-gray-700 text-2xl">Try again later</p>
        </div>
      )}
    </div>
  );
};

export default FakePayment;
