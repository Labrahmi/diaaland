
function Services() {
  // refs  
  return (
    <>
      <div className=''>
        <h1 className='md:text-3xl text-xl font-bold text-zinc-900 text-center'>Our Services</h1>
        <div className='py-4 md:10'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8'>
          {/*  */}
          <div className='flex flex-col items-start space-y-4 bg-white border border-zinc-200 rounded-md p-4 py-6 md:hover:border-zinc-400 hover:saturate-[1.3] saturate-[1] cursor-pointer transition-all duration-300 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/hr_service.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>Recruitment of IT profiles</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-sm text-xs'>Help companies properly write their resource requirements.</li>
                <li className='text-zinc-700 md:text-sm text-xs'>Helping companies find the right developers.</li>
                <li className='text-zinc-700 md:text-sm text-xs'>Help developers find offers suited to their skills.</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col items-start space-y-4 bg-white border border-zinc-200 rounded-md p-4 py-6 md:hover:border-zinc-400 hover:saturate-[1.3] saturate-[1] cursor-pointer transition-all duration-300 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/IT_coach.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>IT Training & Coaching</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-sm text-xs'>Supporting young people to find the right training they need</li>
                <li className='text-zinc-700 md:text-sm text-xs'>Provide monitoring and support during training.</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col items-start space-y-4 bg-white border border-zinc-200 rounded-md p-4 py-6 md:hover:border-zinc-400 hover:saturate-[1.3] saturate-[1] cursor-pointer transition-all duration-300 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/consultant_it.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>IT technical consultant</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-sm text-xs'>Architecture of information systems.</li>
                <li className='text-zinc-700 md:text-sm text-xs'>Management and monitoring of IT projects.</li>
                <li className='text-zinc-700 md:text-sm text-xs'>Organization of IT events. </li>
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