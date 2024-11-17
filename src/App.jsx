import React, { useState } from 'react';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRequestCallback = async () => {
    // try {
    //   const response = await axios.post("/contact", { message: "Request Call Back" });
    //   console.log("Callback request sent successfully:", response.data);
    // } catch (error) {
    //   console.error("Error sending callback request:", error);
    // }
    if (!phone.match(/^[0-9]{10}$/)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    window.location.href = `tel:${phone}`;

  };

  const openWhatsApp = () => {
    const demoNumber = "+1234567890"; 
    window.open(`https://wa.me/${demoNumber}`, "_blank");
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
      <video className='mb-28 h-full' autoPlay muted loop>
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

        <div className='my-6 mx-4 md:mx-12 my-14 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/carousel-images/0.jpg?v=1"></img>
        </div>
         







   <div className="h-full bg-stone-200">
  <div className="text-center text-3xl pt-10">
    TAKE A VIRTUAL TOUR
  </div>

  <div className="flex flex-col mx-4 items-center mt-8 pb-10 space-y-4  md:flex-row md:justify-center md:space-y-0 md:space-x-4">
    <button className="w-full h-14 text-lg  text-white bg-neutral-700 hover:bg-black md:w-80">
      SKY PALACE
    </button>
    <button className="w-full h-14 text-lg  text-white bg-neutral-700 hover:bg-black md:w-80">
      4 BEDROOM APARTMENT
    </button>
  </div>
</div>








<div className='bg-customBrown h-full'>
          <div className='text-center text-3xl text-white pt-24 mb-6 '>
          DEDICATED AMENITIES AND LIFESTYLE
          </div>
          <div className='flex items-center justify-center mb-6'>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>

        <div className='text-center text-white md:mb-2 text-lg mb-4 px-2'>
        WHERE LUXURY MEETS CONVENIENCE
        </div>

        <div className='text-center text-white mb-4  px-2 md:text-lg md:mb-2'>
        Discover a wealth of possibilities where you can prioritise self-care, connect with friends,
        </div>

        <div className='text-center text-white px-2 md:text-lg pb-8'>
        cherish quality family moments, or simply indulge in moments of tranquillity.
        </div>

        </div>











        <div className=' bg-stone-200 pt-16'>
        <div className='text-center mb-2 text-3xl '>
        DOWNTOWN DUBAI LIFESTYLE
        </div>

        <div className='flex items-center justify-center mb-6 pt-2 '>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>

        <div className='text-center text-lg'>
        Where luxury living meets cosmopolitan chic,
        </div>

        <div className='text-center text-lg'>
        Indulge in refined city living in the vibrant heart of Dubai, where every moment is an experience.
        </div>
      
        <div className='mt-24'>
          <img src=''></img>
        </div>
        </div>






    
        <div className='text-center text-3xl mb-2 pt-24'>
        THE ESSENTIALS
        </div>
        <p className='text-center text-lg md:px-60 mb-4'>
        Experience the convenience and value of the essential services, thoughtfully provided to all Residence owners. Enjoy access to residence concierge services, a doorman and valet to suit your convenience, around the clock security, and fully-staffed residential facilities.
        </p>

       
        <p className='text-center text-lg px-4 md:px-60 '>
        Essential services are made available to all Residences owners and are included in the service charge assessed to each residence owner.
        </p>


        <div className='my-6 mx-4 md:mx-12 md:mt-24 md:mb-16'>
          <img src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/the-essentials.webp'></img>
        </div>
      
     






        <div className='text-center  text-2xl px-4  md:text-3xl  mb-4  lg:px-64 md:px-20'>
        RIXOS OWNERSHIP DELIVERS GLOBAL VVIP BENEFITS AND EXCLUSIVE À LA CARTE SERVICES
        </div>

        <div className='flex items-center justify-center mb-6'>
        <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
        </div>

        <div className='text-center text-lg mb-8 px-4 lg:mb-12'>
        INDULGE IN THE ULTIMATE LUXURY SERVICES
        </div>
        

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 text-lg">
         <div className="lg:w-5/12  lg:ml-16 pl-4 md:pl-8">
        <div className="mb-4 mt-4">
        <span className="font-semibold ">In-residence catering:</span> Experience exquisite culinary
      creations with your personal chef.
    </div>

    <div className="mb-4">
        <span className="font-semibold">Shopping services and personal assistant:</span> Shop to your
      heart’s content with the help of our dedicated assistant and shopping services.
    </div>

    <div className="mb-4">
        <span className="font-semibold">Childcare, dry cleaning, and laundry services:</span> Enjoy
      your peace of mind by delegating your chores to our readily available services.
    </div>

    <div className="mb-4">
        <span className="font-semibold">Private transportation and limousine services:</span> Elevate
      your journeys by travelling in style with our private vehicle or limousine.
    </div>

    <div className="mb-4">
        <span className="font-semibold">In-residence housekeeping and</span>
        <span className="font-semibold">maintenance:</span> Effortlessly maintain the comfort of your
      home, tailored to suit your preferences.
    </div>

    <div className="mb-4">
        <span className="font-semibold">“While You Are Away” Maintenance Package:</span> Ensure
      the upkeep of your residence even when you’re out of
      the country with our comprehensive turnkey solution.
  </div>
  </div>

  <div className="py-0 pl-4  my-0 lg:w-7/12 lg:mr-16  lg:px-4 lg:my-0 md:px-48 md:my-12">
    <img src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/serivces-section-4.webp" alt="Amenities" />
  </div>
</div>







 <div className='text-center lg:px-36 md:px-16 px-2 text-lg'>
 Embrace a lifestyle of seamless luxury with customisable Á La Carte Services, tailored to meet the demands of the
 discerning few. Unleash the true potential of luxurious living and have your expectations exceeded at every turn.
 </div>

 <div className='text-center mt-4 text-lg  mb-10 md:mb-20'>
 *Á La Carte Services are optional and subject to additional charges.
 </div>
 







<div className="bg-customBrown text-white ">
 <div className='text-center px-6 text-2xl md:text-3xl pt-10 lg:px-72 '>
 PRIVILEGE AND RECOGNITION - AT HOME AND AROUND THE WORLD
  <div  className='flex items-center justify-center mb-6 pt-4'>
  <img  src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg"></img>
 </div>
 </div>

 <div className='text-center text-lg md:px-16 lg:px-64'>
 RESIDENCE OWNERS ARE ELIGIBLE TO PARTICIPATE IN THE ACCOR OWNERSHIP
 BENEFITS PROGRAM*, AFFORDING YOU VVIP STATUS ON A GLOBAL BASIS.
 </div>

 <div className='text-center text-lg mt-2 px-4 md:px-16 lg:px-64'>
 Elevate your standing as a member of an exclusive club, effortlessly aligning yourself with
 the renowned Rixos brand. Experience the pinnacle of care and attention throughout your
 journey within the Accor global network.
 </div>





 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mt-10 lg:mt-16 ">
  <div className="lg:w-5/12 md:mb-16 mb-4   text-lg">
  <div className='lg:pl-24 lg:pr-8 md:px-20 pl-10 pr-4'>
  <ul className="list-disc">
    <li>
      Exclusive invitation to join Diamond status in Accor Live Limitless (ALL), Accor’s loyalty programs.
    </li>
   
    <li className="mt-4">
        VIP reservation desk to support travel planning
        across Accor’s global network of hotels, resorts and
        related hospitality offerings.
    </li>

    <li className="mt-4">
        Automatic upgrades on arrival across more than
        5,500 hotels and resorts worldwide (subject to availability).**
    </li>

    <li className="mt-4">
        20% off best available rate worldwide at
        participating Accor hotels and resorts.
    </li>
    </ul>
    </div>
    <div className='lg:pl-16 lg:pr-8 md:px-12 pl-4 pr-2'>
    <div className="mt-8 ">
        * Eligibility continues for as long as Purchaser owns
        Rixos branded real estate, subject to inclusion of the
        annual Residence Ownership Benefits Fee being
        included in the property service charge assessed to all
        Residence Owners.
    </div>

    <div className="mt-2">
      ** At participating Accor brands and properties
    </div>
    </div>
  </div>


  <div className="lg:w-7/12 lg:flex lg:justify-center lg:pr-16 lg:mt-2  md:px-12 md:mb-16 px-4 mb-6">
    <img className="w-full" src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/services-section-5.webp" alt="Amenities" />
  </div>
</div>

</div>







<div className="pt-24 bg-neutral-800 text-white">
  <div className='lg:pb-24 pb-12'>
  <div className="text-center md:text-3xl text-2xl">
    LOCATION AND COMMUNITY
  </div>

  <div className="flex flex-col items-center justify-center mb-6 pt-4">
    <img 
      src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg" 
      alt="Logo" 
    />
    <div className="text-center text-lg mt-4">
      The perfect blend of luxury living and community life
    </div>
  </div>
  </div>





  <div className="flex flex-col lg:flex-row items-start justify-between">
    <div className="lg:w-1/3 text-white text-lg md:pl-24 pl-12">
        <ul className="list-disc">
        <li><span className='font-bold'>THE DUBAI MALL</span>
        <div>1 minute (150 m)</div>
        </li>
        <li className="mt-4"> <span className='font-bold'>DUBAI CANAL</span>
        <div>1 minute (150 m)</div>
        </li>
      <li className="mt-4"> <span className='font-bold'>BURJ KHALIFA</span>

        <div>2 minutes (800 m)</div>
      </li>

      <li className="mt-4"><span className='font-bold'>DUBAI OPERA</span>
 
        <div>5 minutes (1.1 km)</div>
      </li>

      <li className="mt-4"><span className='font-bold'>DIFC</span>
       
        <div>5 minutes (2 km)</div>
      </li>

      <li className="mt-4"> <span className='font-bold'>DUBAI INTERNATIONAL AIRPORT</span>

        <div>15 minutes (8 km)</div>
      </li>
      </ul>
    </div>


    <div className="lg:w-2/3 lg:pr-16 lg:pl-8 md:px-12 mt-4 px-4">
      <img
        src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/section-6-map.jpg"
        alt="Map"
        className="w-full lg:h-[440px]"
      />
    </div>
  </div>

  <div className="text-center mt-4 pb-12 md:mt-16 text-lg text-white md:pb-16 md:px-24 lg:px-0">
    <div >
      Conveniently located in close proximity to multiple private international schools, including:
    </div>
     <div className='s'>
    <div className='mt-4 '>
      The English College | JSS Private School | Safa British School
    </div>
  </div>
  </div>
</div>










<div className='bg-stone-200 pt-24'>
<div className='text-center text-2xl'>
DISCOVER RIXOS
</div>

<div className="flex items-center justify-center mb-6 pt-2">
    <img src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/inline-logo-golden.svg" alt="Logo" />
  </div>

  <div className='text-center'>
    <div>
    Rixos is renowned for delivering excellence in hospitality, founded on the principles of luxury
    </div>
    <div>
    and convenience, and boasting an international presence across Europe, the Middle East,
    </div>
    <div>
    and Africa, including Turkey, UAE, Egypt, and Russia. Rixos Residences embody this spirit
    </div>
    <div>
    with thoughtfully designed spaces that fosters a sense of community and unity, without
    </div>
    <div>
    compromising your need for privacy and tranquility.
    </div>
  </div>


  <div className="grid grid-cols-4 gap-8 mt-24 m-12">
  <div className="flex flex-row items-start space-x-4">
    <img src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/discover-0.jpg" alt="Luxury Destination" className="w-1/4 h-auto object-cover" />
    <div>
      <h3 className="text-lg font-bold mb-2">LUXURY DESTINATIONS</h3>
      <p className="text-sm">
        Rixos Hotels is a global luxury hotel brand with properties in some of the most sought-after destinations around the world.
        With impeccable service, breathtaking locations, and world-class amenities, an unforgettable luxury experience awaits.
      </p>
    </div>
  </div>

  <div className="flex flex-row items-start space-x-4">
    <img src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/discover-1.jpg" alt="Kids Activities" className="w-1/4 h-auto object-cover" />
    <div>
      <h3 className="text-lg font-bold mb-2">KIDS ACTIVITIES</h3>
      <p className="text-sm">
        The Rixy Kids Club offers a fun and educational atmosphere for children aged 4-12, with planned activities that keep kids engaged all day.
        Relax knowing your child will be entertained while you enjoy yourself.
      </p>
    </div>
  </div>

  <div className="flex flex-row items-start space-x-4">
    <img src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/discover-2.jpg" alt="Spa & Wellness" className="w-1/4 h-auto object-cover" />
    <div>
      <h3 className="text-lg font-bold mb-2">SPA & WELLNESS</h3>
      <p className="text-sm">
        The luxury spas offer locally-inspired therapies blended with rich Turkish traditions, featuring a Turkish hammam and expert therapists for bespoke well-being journeys.
      </p>
    </div>
  </div>

  <div className="flex flex-row items-start space-x-4">
    <img src="https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/discover-3.jpg" alt="Sports & Activities" className="w-1/4 h-auto object-cover" />
    <div>
      <h3 className="text-lg font-bold mb-2">SPORTS & ACTIVITIES</h3>
      <p className="text-sm">
        Reach your fitness goals with group classes, sports coaching, and state-of-the-art facilities, with classes from soothing yoga flows to cardio kickboxing sessions—and activities like snorkeling, horseback riding, and beach volleyball.
      </p>
    </div>
  </div>
</div>


</div>

<div>


  <div className='text-center text-2xl'>
    REGISTER NOW
  </div>

  <div className='flex flex-wrap gap-4 justify-center'>

     
    <div className='w-full sm:w-1/2 text-semibold'>
      <input 
        type="text" 
        placeholder="First Name" 
        className="border border-gray-600 rounded px-4 py-2 w-full" 
      />
    </div>
    
    <div className='w-full sm:w-1/2'>
      <input 
        type="text" 
        placeholder="Last Name" 
        className="border border-gray-600 rounded px-4 py-2 w-full" 
      />
    </div>

   
    <div className='w-full sm:w-1/2'>
      <input 
        type="text" 
        placeholder="Email Address" 
        className="border border-gray-600 rounded px-4 py-2 w-full" 
      />
    </div>

    <div className='w-full sm:w-1/2'>
      <input 
        type="number" 
        placeholder="Phone" 
        className="border border-gray-600 rounded px-4 py-2 w-full" 
      />
    </div>

   
    <div className='w-full sm:w-1/2'>
      <input 
        type="number" 
        placeholder="Company" 
        className="border border-gray-600 rounded px-4 py-2 w-full" 
      />
    </div>

    <div className='w-full sm:w-1/2'>
      <input 
        type="number" 
        placeholder="Purpose" 
        className="border border-gray-600 rounded px-4 py-2 w-full" 
      />
    </div>

  </div>
</div>

<div className=' flex justify-center items-center mt-4'>
  <button class="bg-neutral-700 text-white font-bold py-2 px-4 rounded w-1/2 ">
    Submit
  </button>
</div>


<div className='mt-24 bg-neutral-700'>
  <div className='text-2xl text-center text-white'>
    DEVELOPERS, SALES & MARKETING
  </div>

  <div className='flex justify-start items-center space-x-6 mt-6'>
    <div className="w-1/4">
      <img className="object-contain w-1/2" src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/icons/EastandWest_White.svg?v=202410230002' alt='Image 1' />
    </div>

    <div className="w-1/4">
      <img className="object-contain w-1/2" src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/icons/ennismore-01.svg?v=202410230002' alt='Image 2' />
    </div>

    <div className="w-1/4">
      <img className="object-contain w-1/2" src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/icons/driven-forbes.svg?v=202410230002' alt='Image 3' />
    </div>

    <div className="w-1/4">
      <img className="object-contain w-1/2" src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/icons/refine-project-management.svg?v=202410230002' alt='Image 4' />
    </div>
  </div>

 
 
    
    <div className='flex justify-start mt-12'>
    <div className="w-1/4">
      <img className="object-contain w-1/2" src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/icons/rixos-01.svg' alt='Image 4' />
    </div>

    <div className="w-1/4">
      <img className="object-contain w-1/2" src='https://www.rixosfinancialcenterroaddubairesidences.com/assets/imgs/icons/800-number.svg' alt='Image 4' />
    </div>

    <div className='flex flex-col items-center mt-6'>
  <div className='text-xl mb-4'>
    Reserve your luxury residence today
  </div>

  <div className='w-auto'>
    <input 
      type="text" 
      placeholder="Enter your email address" 
      className="border border-gray-600 rounded px-4 py-2 w-full" 
    />
  </div>
</div>


    </div>
</div>


<div className='bg-neutral-700 pt-24 pb-40'>
<div className='text-lg text-white'>
DISCLAIMER
</div>
<div className='text-white'>
<div>
Rixos Financial Centre Road Dubai Residences (“Project”) is not owned, developed, or sold by Rixos Consultancy FZE or its affiliates. East & West
</div>
<div>
Properties (“Licensee”), is independently owned and operated and is solely responsible for the ownership, development, and operation of the Project.
</div>
</div>

<div className='text-white'>
<div className='mt-2'>
Licensee uses the “Rixos” Brand and certain trademarks pursuant to a limited, non-exclusive, non-transferable and non sub-licensable license from
</div>
<div>
Rixos Consultancy FZE. Under certain circumstances, the license may be terminated or revoked according to its terms in which case neither the
</div>
<div>
individual residential units (“Units”) nor any part of the Project will be identified as a “Rixos” branded project or have any rights to use the “Rixos”
</div>
<div>
trademarks. Rixos Consultancy FZE does not make any representations or guarantees with respect to the Units or the Project and is not responsible
</div>
<div>
for Licensee’s marketing practices, advertising, and sales representations.


</div>
</div>






</div>



{/* Footer component */}
<div className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-white h-16 md:h-20 bg-opacity-90 border-t-2 z-10">
<div className='flex '>
  <button className='animate-bounce cursor-pointer'  onClick={openWhatsApp}>
<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg>
</button>
<span className="font-semibold text-center px-2 py-2">Chat on WhatsApp</span> 
</div>
<div className='text-center w-64'>
© 2024 Rixos. All Rights Reserved.
</div>
 
     <div className='flex space-x-2'>
     <input
        type="tel"
        className="h-10 w-64 text-center"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="[0-9]{10}"
        title="Please enter a 10-digit phone number"
      />

      <button
        onClick={handleRequestCallback}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Request Call Back
      </button>
      </div>  
      </div>  
</div>
  );
}


export default App;