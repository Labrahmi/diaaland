import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Offers from './components/Offers'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  
  document.dir = 'rtl'

  return (
    <div className='p-6 py-8 font-noto'>
      <div className='fixed left-0 top-0 p-5 w-full bg-[#F2F2F2] bg-opacity-80 backdrop-blur-lg shadow z-10'><Header /></div>
      <main>
        <Hero />
        <div className=''></div>
        <TrustedBy />
        <div id='services' className='py-16 md:py-28'></div>
        <Services />
        <div id='offers' className='py-16 md:py-28'></div>
        <Offers />
        <div id='contact_us' className='py-16 md:py-28'></div>
        <ContactUs />
        <div className='py-6 md:py-10'></div>
        <Footer />
      </main>
    </div>
  )
}

export default App
