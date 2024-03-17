import { Select } from 'antd';
import { useRef } from 'react'

function Header() {
  // refs
  const navbarCollapseButtonRef = useRef(null);
  const navbarDefault = useRef(null);
  
  const navbarCollapseHandleOnClick = () => {
    navbarDefault.current.classList.toggle('hidden');
  }
  
  const languageHandlOnChange = (value) => {
    window.location.href = `/${value}`;
  }
  
  // classes
  const navLink = 'block py-2 px-3 text-zinc-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-900 md:p-0 md:text-[#222831]:bg-gray-500:text-white md:bg-transparent';
  
  return (
    <>
      <nav className="border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative md:static">
          <a href="/fr" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center md:text-2xl font-bold whitespace-nowrap font-palanquin hover:[text-shadow:_0_0_16px_rgb(246_92_91_/_16%)] transition-all duration-200 ease-in-out">Diaa<span className='text-orange-600'>Land</span></span>
            </a>
            <button onClick={navbarCollapseHandleOnClick} ref={navbarCollapseButtonRef} id='navbar-collapse-button' data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth={"2"} d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div ref={navbarDefault} className="w-full md:block md:w-auto absolute top-10 md:static hidden" id="navbar-default">
              <ul className="font-medium text-xs md:text-sm flex items-stretch md:items-center flex-col space-y-2 md:space-y-0 p-4 md:p-0 mt-4 border border-zinc-300 md:border-none shadow-xl md:shadow-none rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0">
                <li className=''>
                  <a href="#top" className={navLink}>Accueil</a>
                </li>
                <li className=''>
                  <a href="#services" className={navLink}>Services</a>
                </li>
                <li className=''>
                  <a href="#offers" className={navLink}>Offres</a>
                </li>
                <li className=''>
                  <a href="#about" className={navLink}>À propos</a>
                </li>
                <li className=''>
                  <a href="#contact_us" className={navLink}>Nous contacter</a>
                </li>
                <li>
                  <Select
                    className='text-center font-bold text-white'
                    defaultValue="fr"
                    onChange={languageHandlOnChange}
                    style={{ width: 120 }}
                    options={[
                      { value: 'en', label: '🇺🇸 English' },
                      { value: 'fr', label: '🇫🇷 Français' },
                      { value: 'ar', label: '🇲🇦 العربية' },
                    ]}
                  />
              </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Header