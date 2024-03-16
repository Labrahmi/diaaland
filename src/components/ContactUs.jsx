import 'boxicons'

function Offers() {
  return (
    <>
      <div className=''>
        <h1 className='md:text-3xl text-xl font-bold text-zinc-900 text-center'>Contact Us</h1>
        <div className='py-4 md:py-8'></div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {/*  */}
            <a href='#' className="bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
              <div className='flex items-center space-x-1.5'>
                <div className='flex'><box-icon name='pin' type='solid' ></box-icon></div>
                <div className='text-xl font-bold'>Address</div>
              </div>
              <div>
                <div>Boulevard Hassan II, Bureaux Nakhil Etage 4 N35, Tetouan 93000</div>
              </div>
            </a>
            {/*  */}
            <a href='#' className="bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
              <div className='flex items-center space-x-1.5'>
                <div className='flex'><box-icon name='phone' type='solid' ></box-icon></div>
                <div className='text-xl font-bold'>Phone number</div>
              </div>
              <div>
                <div className='text-gray-500'>During working hours only</div>
                <div className='font-semibold'>+212 8 08 53 17 91</div>
              </div>
            </a>
            {/*  */}
            <a href='#' className="bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
              <div className='flex items-center space-x-1.5'>
                <div className='flex'><box-icon name='envelope' type='solid' ></box-icon></div>
                <div className='text-xl font-bold'>Email</div>
              </div>
              <div>
                <div className='font-semibold'>me@diaaland.com</div>
              </div>
            </a>
            {/*  */}
            <a href='#' className="bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
              <div className='flex items-center space-x-1.5'>
                <div className='flex'><box-icon name='time' type='solid' ></box-icon></div>
                <div className='text-xl font-bold'>Schedules</div>
              </div>
              <div>
                <div>Monday - Thursday</div>
                <div className='font-semibold'>9:30 AM - 03:00 PM</div>
              </div>
            </a>
            {/*  */}
          </div>
          <div className="bg-white space-y-2 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 transition-all duration-200 ease-in-out">
            <div className='font-semibold md:text-xl text-lg'>DiaaLand Newsletter</div>
            <div className='text-sm'>Subscribe to our Newsletter</div>
            <div className='py-1'></div>
            <form className='space-y-2' action="#" method="POST">
              <input type="email" name="email" id="email" className="w-full p-2 px-4 border border-zinc-300 rounded-md focus:outline-none" placeholder="Your email" />
              <input type="text" name="name" id="name" className="w-full p-2 px-4 border border-zinc-300 rounded-md focus:outline-none" placeholder="Your name (optional)" />
              <div className='py-1'></div>
              <div className='space-x-2 flex py-1 px-2 w-full'>
                <input type='checkbox' name='job_offers' id='job_offers' className='' />
                <label htmlFor='job_offers' className='select-none text-xs cursor-pointer'>Job Offers</label>
              </div>
              <div className='space-x-2 flex py-1 px-2 w-full'>
                <input type='checkbox' name='internships' id='internships' className='' />
                <label htmlFor='internships' className='select-none text-xs cursor-pointer'>Internships</label>
              </div>
              <div className='space-x-2 flex py-1 px-2 w-full'>
                <input type='checkbox' name='job_market_news' id='job_market_news' className='' />
                <label htmlFor='job_market_news' className='select-none text-xs cursor-pointer'>Job Market news</label>
              </div>
              <div className='space-x-2 flex py-1 px-2 w-full'>
                <input required={true} type='checkbox' name='authorization' id='authorization' className='' />
                <label htmlFor='authorization' className='select-none text-sm cursor-pointer font-normal'>I authorize DiaaLand to send me emails</label>
              </div>
              <div className='py-1'></div>
              <div>
                <button type="submit" className="w-full bg-zinc-900 text-white p-2 rounded-md hover:bg-zinc-800 transition-all duration-200 ease-in-out">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offers