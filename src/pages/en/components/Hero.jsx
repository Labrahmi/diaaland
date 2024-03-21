
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
          <div className="flex">
            <a href='#' className='flex items-center p-2 px-3 w-fit text-sm self-start text-white bg-black fill-white bg-opacity-85 hover:bg-opacity-100 hover:shadow-2xl hover:shadow-gray-300 font-semibold rounded-md border border-black transition-all duration-300 ease-in-out'>
              <div className=''>Contact us now</div>
              <div className="flex px-1"></div>
              <div className="flex"><box-icon name='chevron-right'></box-icon></div>
            </a>
            <div className="flex px-1"></div>
            <a href='#' className='flex items-center p-2 px-3 w-fit text-sm self-start text-black bg-opacity-85 hover:bg-opacity-100 hover:shadow-2xl hover:shadow-gray-300 font-semibold rounded-md border border-black transition-all duration-300 ease-in-out'>
              <div className="flex invisible w-0"><box-icon name='chevron-right'></box-icon></div>
              <div className=''>Explore our offers</div>
              <div className="flex invisible w-0"><box-icon name='chevron-right'></box-icon></div>
            </a>
          </div>
        </div>
        <div className='group/all relative transition-all duration-500 ease-in-out animation-bounce'>
          {/*  */}
          <img src={"/6203116.jpg"} className="md:w-[32rem] w-[24rem] scale-[0.95] md:group-hover/all:scale-[1] md:group-hover/all:opacity-20 opacity-80 select-none md:group-hover/all:saturate-0 saturate-150 md:group-hover/all:blur-md blur-none transition-all duration-500 ease-in-out py-2 md:py-0" alt="logo" />
          {/*  */}
          <a href='#' className="group/item absolute ring ring-gray-200 hover:ring-blue-100 hidden md:flex items-center p-4 px-6 bg-white rounded-xl border top-32 left-0 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000032] transition-all duration-500 ease-in-out select-none">
            <div className='flex scale-125 fill-zinc-600 group-hover/item:fill-blue-500 transition-all duration-500 ease-in-out'><box-icon name='check-circle'></box-icon></div>
            <div className="flex px-1"></div>
            <div className='space-y-2'>
              <div className='text-zinc-600 group-hover/item:text-blue-500 transition-all duration-500 ease-in-out'>Recruitment of IT profiles</div>
              <div className='space-y-1'>
                <div className='flex'><div className='bg-zinc-100 group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[90%] p-1 transition-all duration-500 ease-in-out'></div></div>
                <div className='flex'><div className='bg-zinc-100 group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[64%] p-1 transition-all duration-500 ease-in-out'></div></div>
              </div>
            </div>
          </a>
          {/*  */}
          <a href='#' className="group/item absolute ring ring-gray-200 hover:ring-blue-100 hidden md:flex items-center p-4 px-6 bg-white rounded-xl border top-64 left-52 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000032] transition-all duration-500 ease-in-out select-none">
            <div className='flex scale-125 fill-zinc-600 group-hover/item:fill-blue-500 transition-all duration-500 ease-in-out'><box-icon name='check-circle'></box-icon></div>
            <div className="flex px-1"></div>
            <div className='space-y-2'>
              <div className='text-zinc-600 group-hover/item:text-blue-500 transition-all duration-500 ease-in-out'>IT Training & Coaching</div>
              <div className='space-y-1'>
                <div className='flex'><div className='bg-zinc-100 group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[90%] p-1 transition-all duration-500 ease-in-out'></div></div>
                <div className='flex'><div className='bg-zinc-100 group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[64%] p-1 transition-all duration-500 ease-in-out'></div></div>
              </div>
            </div>
          </a>
          {/*  */}
          <a href='#' className="group/item absolute ring ring-gray-200 hover:ring-blue-100 hidden md:flex items-center p-4 px-6 bg-white rounded-xl border top-96 left-32 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000032] transition-all duration-500 ease-in-out select-none">
            <div className='flex scale-125 fill-zinc-600 group-hover/item:fill-blue-500 transition-all duration-500 ease-in-out'><box-icon name='check-circle'></box-icon></div>
            <div className="flex px-1"></div>
            <div className='space-y-2'>
              <div className='text-zinc-600 group-hover/item:text-blue-500 transition-all duration-500 ease-in-out'>IT technical consultant</div>
              <div className='space-y-1'>
                <div className='flex'><div className='bg-zinc-100 group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[90%] p-1 transition-all duration-500 ease-in-out'></div></div>
                <div className='flex'><div className='bg-zinc-100 group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[64%] p-1 transition-all duration-500 ease-in-out'></div></div>
              </div>
            </div>
          </a>
          {/*  */}
        </div>
      </div>
    </>
  )
}

export default Hero