
function Hero() {
  // refs  
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center h-[86vh] md:h-[76vh] md:mt-0'>
        <div className='space-y-8 md:w-[40%] md:pt-24'>
          <div>
            <h1 className='text-base md:text-3xl font-bold text-zinc-900'>👨‍💻 Are you a developer?</h1>
            <h2 className='text-sm md:text-xl text-zinc-900'>Say goodbye to selection based only on CVs</h2>
            <h2 className='text-sm md:text-xl text-zinc-900'>Your skills are all that matters</h2>
          </div>
          <div>
            <h1 className='text-base md:text-3xl font-bold text-zinc-900'>🕵️‍♂️ Looking for developers?</h1>
            <h2 className='text-sm md:text-xl text-zinc-900'>What if we assure you that the majority of our proposals will satisfy you?</h2>
          </div>
          <div className="flex space-x-3">
            <a href='#' className='flex items-center p-2 px-3 space-x-1 w-fit text-sm self-start text-white bg-black fill-white bg-opacity-85 hover:bg-opacity-100 hover:shadow-2xl hover:shadow-gray-300 font-semibold rounded-md border border-black transition-all duration-300 ease-in-out'>
              <div className=''>Contact us now</div>
              <div className="flex"><box-icon name='chevron-right'></box-icon></div>
            </a>
            <a href='#' className='flex items-center p-2 px-3 w-fit text-sm self-start text-black bg-opacity-85 hover:bg-opacity-100 hover:shadow-2xl hover:shadow-gray-300 font-semibold rounded-md border border-black transition-all duration-300 ease-in-out'>
              <div className="flex invisible w-0"><box-icon name='chevron-right'></box-icon></div>    
              <div className=''>explore our offers</div>
              <div className="flex invisible w-0"><box-icon name='chevron-right'></box-icon></div>
            </a>
          </div>
        </div>
        
        <div className='relative'>
          <img src={"/hr_hero.png"} className="w-[32rem] select-none" alt="logo" />
          {/*  */}
          <div className="absolute hidden md:flex items-center space-x-4 p-4 px-6 bg-white cursor-default rounded-xl border top-0 left-0 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000020]">
            <div className='flex scale-125 fill-zinc-600'><box-icon name='check-circle'></box-icon></div>
            <div className='space-y-1'>
              <div className='text-zinc-600'>Recruitment of IT profiles</div>
              <div className='flex'><div className='bg-zinc-100 bg-opacity-85 rounded w-[90%] p-1'></div></div>
              <div className='flex'><div className='bg-zinc-100 bg-opacity-85 rounded w-[64%] p-1'></div></div>
            </div>
          </div>
          {/*  */}
          <div className="absolute hidden md:flex items-center space-x-4 p-4 px-6 bg-white cursor-default rounded-xl border top-32 left-52 animate-[wave_8s_linear_infinite_1300ms] shadow-xl shadow-[#00000020]">
            <div className='flex scale-125 fill-zinc-600'><box-icon name='check-circle'></box-icon></div>
            <div className='space-y-1'>
              <div className='text-zinc-600'>IT Training & Coaching</div>
              <div className='flex'><div className='bg-zinc-100 bg-opacity-85 rounded w-[90%] p-1'></div></div>
              <div className='flex'><div className='bg-zinc-100 bg-opacity-85 rounded w-[64%] p-1'></div></div>
            </div>
          </div>
          {/*  */}
          <div className="absolute hidden md:flex items-center space-x-4 p-4 px-6 bg-white cursor-default rounded-xl border top-64 left-32 animate-[wave_8s_linear_infinite_0ms] shadow-xl shadow-[#00000020]">
            <div className='flex scale-125 fill-zinc-600'><box-icon name='check-circle'></box-icon></div>
            <div className='space-y-1'>
              <div className='text-zinc-600'>IT technical consultant</div>
              <div className='flex'><div className='bg-zinc-100 bg-opacity-85 rounded w-[90%] p-1'></div></div>
              <div className='flex'><div className='bg-zinc-100 bg-opacity-85 rounded w-[64%] p-1'></div></div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  )
}

export default Hero