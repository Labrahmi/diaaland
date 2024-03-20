import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Offers from './components/Offers'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'

function App() {
  document.dir = 'rtl';
  const headerRef = useRef(null);
  const checkScroll = () => {
    const header = headerRef.current;
    try {
      if (!header) { return; }
      if (window.scrollY > 250) { header.classList.add('shadow-xl', 'top-0'); }
      else { header.classList.remove('shadow-xl', 'top-0'); }      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkScroll();
    window.addEventListener('scroll', checkScroll);
  }
  , []);
  return (
    <div className='py-8 pb-0 font-noto'>
      <div ref={headerRef} className='sticky -top-32 p-3 md:p-5 md:px-6 md:rounded-t-none-none w-full bg-white rounded-lg shadow-[#00000008] z-10 transition-all duration-700 ease-in-out'><Header /></div>
      <main className='p-4'>
        <Hero />
        <div className=''></div>
        <TrustedBy />
        <div id='services' className='py-16 md:py-28'></div>
        <Services />
        <div id='offers' className='py-16 md:py-28'></div>
        <Offers />
        <div id='contact_us' className='py-16 md:py-28'></div>
        <ContactUs />
        <div className='py-8 md:py-12'></div>
        <Footer />
      </main>
    </div>
  )
}

export default App
