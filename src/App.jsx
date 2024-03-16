import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Offers from './components/Offers'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {

  return (
    <div className='p-6'>
      <Header />
      <main>
        <Hero />
        <div className='py-16 '></div>
        <TrustedBy />
        <div className='py-16 md:py-28'></div>
        <Services />
        <div className='py-16 md:py-28'></div>
        <Offers />
        <div className='py-16 md:py-28'></div>
        <ContactUs />
        <div className='py-6 md:py-10'></div>
        <Footer />
      </main>
    </div>
  )
}

export default App
