import React, { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white h-16 md:h-20 bg-opacity-90 border-b-2 z-10 ">
        <div className="md:ml-12">
          <img
            className="h-14  md:h-16"
            src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/rixos-dark.svg?v=202410230002"
            alt="Logo"
          />
        </div>
        
        <div className="md:mr-12 cursor-pointer" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
          </svg>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transform z-20  transition-transform duration-300 ease-in-out w-full md:w-96  ${
    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
      >
        <div className="py-4 px-4">
          <div className="flex items-center justify-between">
            <img
              className="h-16"
              src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/rixos.svg?v=202410230002"
              alt="Rixos Logo"
            />
            <button className="text-2xl p-4" onClick={toggleSidebar}>
              &times;
            </button>
          </div>
        </div>
        <div className='border-b border-gray-500'></div>

        <ul className="p-4 space-y-4 flex flex-col items-start">
          <button className="font-serif">THE RESIDENCE</button>
          <button className="font-serif">THE LIFESTYLE</button>
          <button className="font-serif">THE SERVICES</button>
          <button className="font-serif">THE LOCATION</button>
          <button className="font-serif">DISCOVER RIXOS</button>
          <button className="font-serif">CONTACT US</button>
        </ul>
      </div>
      <video className='mb-24 h-full' autoPlay muted loop>
          <source src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/videos/compressed/rixos-desktop.mp4?v=202410230002" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <div className='mb-12' >
        <h2 className='text-3xl text-center mb-6'>EXPERIENCE EXCELLENCE</h2>
        <div className='flex items-center justify-center mb-6 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>
        <div className='text-center text-lg '>INTRODUCING RIXOS FINANCIAL CENTRE ROAD DUBAI RESIDENCES: </div>
        <div className='text-center text-lg '> EXCLUSIVITY AND SOPHISTICATION REDEFINED</div>
      </div>

      

    </div>
  );
}

export default App;