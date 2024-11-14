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
      <video className='mb-36 h-full' autoPlay muted loop>
          <source src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/videos/compressed/rixos-desktop.mp4?v=202410230002" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <div className='mb-12' >
        <h2 className='text-3xl text-center mb-6'>EXPERIENCE EXCELLENCE</h2>
        <div className='flex items-center justify-center mb-6'>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>
       <div className='text-center text-lg '>INTRODUCING RIXOS FINANCIAL CENTRE ROAD DUBAI RESIDENCES: </div>
        <div className='text-center text-lg '> EXCLUSIVITY AND SOPHISTICATION REDEFINED</div>
      
        <p className='text-lg mt-4 text-center px-4 md:px-20'>Experience elegance and innovation in the heart of Dubai. Nestled against the iconic skyline, these exclusive residences offer a lifestyle beyond compare. We understand that finding the perfect home extends beyond merely finding a place to reside; it is about discovering a place which you can call home.</p> 
        <div className=' my-14 mx-4 md:mx-12 my-14'>
        <img  src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/video_place_holder_image.webp'></img>
        </div>
        </div>




        <div className="text-center text-3xl">DISCOVER RIXOS FINANCIAL CENTRE</div>
        <div className="text-center text-3xl mb-6">ROAD DUBAI RESIDENCES</div>
        <div className='flex items-center justify-center mb-6 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>


        <div className='text-center text-lg'>
        A MODERN ICON OF INNOVATION AND DESIGN
        </div>

    
        <p className='text-lg mt-4 text-center px-4 md:px-20'>These exclusive residences provide more than just a living space; they offer a sense of belonging and connection for you and your family. Experience luxury living at its finest. Choose from a range of <span className='font-semibold'> 1, 2, 3, 4, AND 5 BEDROOM DUPLEX PENTHOUSES.</span></p> 

        <div className='flex items-center justify-center mt-20 my-12 mx-4 md:mt-20 mb-12 mx-12 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/carousel-images/0.jpg?v=1"></img>
        </div>
         




        <div className='h-52 w-full bg-stone-200 mb-12 '>
        <div className='text-center text-3xl pt-10'>
        TAKE A VIRTUAL TOUR
        </div>

        <div className='mx-2 md:flex justify-center space-x-4 mt-8'>
        <button className=' w-full h-14 mb-4 text-lg text-white  bg-neutral-800 hover:bg-black md:w-80'>
         SKY PALACE
        </button>
        <button className='w-full h-14 text-lg text-white bg-neutral-800 hover:bg-black md:w-80'>
         4 BEDROOM APARTMENT
        </button>
        </div>
        </div>

        <div className='mt-16 bg-orange-900'>
          <div className='text-center text-2xl pt-12 '>
          DEDICATED AMENITIES AND LIFESTYLE
          </div>
        <div className='flex items-center justify-center mb-6 pt-2  '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>

        <div className='text-center'>
        WHERE LUXURY MEETS CONVENIENCE
        </div>

        <div className='text-center'>
        Discover a wealth of possibilities where you can prioritise self-care, connect with friends,
        </div>

        <div className='text-center'>
        cherish quality family moments, or simply indulge in moments of tranquillity.
        </div>

        <div className=''>
          <img src=''></img>
        </div>

        </div>

        <div className='mt-24'>
        <div className='text-center mb-2 text-xl'>
        DOWNTOWN DUBAI LIFESTYLE
        </div>

        <div className='flex items-center justify-center mb-6 pt-2 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>

        <div className='text-center'>
        Where luxury living meets cosmopolitan chic,
        </div>

        <div className='text-center'>
        Indulge in refined city living in the vibrant heart of Dubai, where every moment is an experience.
        </div>
      
        <div className='mt-24'>
          <img src=''></img>
        </div>
        </div>

        <div>
        <div className='text-center text-xl semi-bold'>
        THE ESSENTIALS
        </div>
        <div className='text-center'>
        Experience the convenience and value of the essential services, thoughtfully provided to all
        </div>
        <div className='text-center'>
        Residence owners. Enjoy access to residence concierge services, a doorman and valet to suit
        </div>
        <div className='text-center'>
        your convenience, around the clock security, and fully-staffed residential facilities.
        </div>

         <div className='mt-4'>
        <div className='text-center'>
        Essential services are made available to all Residences owners and are included in the
        </div>

        <div className='text-center'>
        service charge assessed to each residence owner.
        </div>
        </div>
        <div className='mt-12 m-12'>
        <div>
          <img src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/the-essentials.webp'></img>
        </div>
        </div>

        <div className='text-center text-2xl'>
        RIXOS OWNERSHIP DELIVERS GLOBAL VVIP BENEFITS
        </div>
        <div className='text-center text-2xl'>
        AND EXCLUSIVE À LA CARTE SERVICES
        </div>

        <div  className='flex items-center justify-center mb-6 pt-2 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>

        <div className='text-center'>
        INDULGE IN THE ULTIMATE LUXURY SERVICES
        </div>
        

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">

  <div className="md:w-1/2 mt-24">
    <div className="mb-4">
      <div>
        <span className="font-semibold">In-residence catering:</span> Experience exquisite culinary
      </div>
      <div>creations with your personal chef.</div>
    </div>

    <div className="mb-4">
      <div>
        <span className="font-semibold">Shopping services and personal assistant:</span> Shop to your
      </div>
      <div>heart’s content with the help of our dedicated assistant</div>
      <div>and shopping services.</div>
    </div>

    <div className="mb-4">
      <div>
        <span className="font-semibold">Childcare, dry cleaning, and laundry services:</span> Enjoy
      </div>
      <div>your peace of mind by delegating your chores to our</div>
      <div>readily available services.</div>
    </div>

    <div className="mb-4">
      <div>
        <span className="font-semibold">Private transportation and limousine services:</span> Elevate
      </div>
      <div>your journeys by travelling in style with our private</div>
      <div>vehicle or limousine.</div>
    </div>

    <div className="mb-4">
      <div>
        <span className="font-semibold">In-residence housekeeping and</span>
      </div>
      <div>
        <span className="font-semibold">maintenance:</span> Effortlessly maintain the comfort of your
      </div>
      <div>home, tailored to suit your preferences.</div>
    </div>

    <div className="mb-4">
      <div>
        <span className="font-semibold">“While You Are Away” Maintenance Package:</span> Ensure
      </div>
      <div>the upkeep of your residence even when you’re out of</div>
      <div>the country with our comprehensive turnkey solution.</div>
    </div>
  </div>

  <div className='mt-12 m-12'>
  <div className="md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
    <img className="w-5/12 md:w-auto" src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/serivces-section-4.webp" alt="Amenities" />
  </div>
  </div>
</div>
 </div>

 <div>
 <div className='text-center'>
 Embrace a lifestyle of seamless luxury with customisable Á La Carte Services, tailored to meet the demands of the
 </div>
 <div className='text-center'>
 discerning few. Unleash the true potential of luxurious living and have your expectations exceeded at every turn.
 </div>
 </div>

 <div className='mt-4'>
 <div className='text-center'>
 *Á La Carte Services are optional and subject to additional charges.
 </div>
 </div>


<div className='bg-orange-900'>
 <div className='mt-16'>
 <div className='text-center text-2xl'>
 PRIVILEGE AND RECOGNITION - AT HOME AND
 </div>
 <div className='text-center text-2xl'>
 AROUND THE WORLD
 </div>

  <div  className='flex items-center justify-center mb-6 pt-2 '>
  <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
 </div>

 <div className='text-center text-lg'>
 RESIDENCE OWNERS ARE ELIGIBLE TO PARTICIPATE IN THE ACCOR OWNERSHIP
 </div>
 <div className='text-center text-lg'>
 BENEFITS PROGRAM*, AFFORDING YOU VVIP STATUS ON A GLOBAL BASIS.
 </div>
 <div className='text-center text-lg'>
 Elevate your standing as a member of an exclusive club, effortlessly aligning yourself with
 </div>
 <div className='text-center text-lg'>
 the renowned Rixos brand. Experience the pinnacle of care and attention throughout your
 </div>
 <div className='text-center text-lg'>
 journey within the Accor global network.
 </div>
 
 </div>

 <div className="flex flex-col md:flex-row justify-between items-start md:items-start mt-24">

  <div className="md:w-1/2">
    <div>
      Exclusive invitation to join Diamond status in Accor
    </div>
    <div>
      Live Limitless (ALL), Accor’s loyalty programs.
    </div>

    <div className="mt-4">
      <div>
        VIP reservation desk to support travel planning
      </div>
      <div>
        across Accor’s global network of hotels, resorts and
      </div>
      <div>
        related hospitality offerings.
      </div>
    </div>

    <div className="mt-4">
      <div>
        Automatic upgrades on arrival across more than
      </div>
      <div>
        5,500 hotels and resorts worldwide (subject to availability)
      </div>
    </div>

    <div className="mt-4">
      <div>
        20% off best available rate worldwide at
      </div>
      <div>
        participating Accor hotels and resorts.
      </div>
    </div>

    <div className="mt-6">
      <div>
        Eligibility continues for as long as Purchaser owns
      </div>
      <div>
        Rixos branded real estate, subject to inclusion of the
      </div>
      <div>
        annual Residence Ownership Benefits Fee being
      </div>
      <div>
        included in the property service charge assessed to all
      </div>
      <div>
        Residence Owners.
      </div>
    </div>

    <div className="mt-2">
      ** At participating Accor brands and properties
    </div>
  </div>


  <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
    <img className="w-full md:w-auto" src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/services-section-5.webp" alt="Amenities" />
  </div>
</div>

</div>

  </div>
  );
}

export default App;