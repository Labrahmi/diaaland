
function Services() {
  // refs  
  return (
    <>
      <div className=''>
        <h1 className='md:text-3xl text-xl font-bold text-zinc-900 text-center'>Our Services</h1>
        <div className='py-4 md:10'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8'>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/hr_service.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>Recruitment of IT profiles</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>Help companies properly write their resource requirements.</li>
                <li className='text-zinc-700 md:text-base text-xs'>Helping companies find the right developers.</li>
                <li className='text-zinc-700 md:text-base text-xs'>Help developers find offers suited to their skills.</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/IT_coach.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>IT Training & Coaching</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>Supporting young people to find the right training they need</li>
                <li className='text-zinc-700 md:text-base text-xs'>Provide monitoring and support during training.</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/consultant_it.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>IT technical consultant</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>Architecture of information systems.</li>
                <li className='text-zinc-700 md:text-base text-xs'>Management and monitoring of IT projects.</li>
                <li className='text-zinc-700 md:text-base text-xs'>Organization of IT events. </li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  )
}

export default Services