
function Hero() {
  // refs  
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center h-[86vh] md:h-[76vh] md:mt-0'>
        <div className='space-y-8 md:w-[40%] md:pt-24'>
          <div>
            <h1 className='text-base md:text-3xl font-bold text-zinc-900'>👨‍💻 هل أنت مطور؟</h1>
            <h2 className='text-sm md:text-xl text-zinc-900'>قل وداعًا للاختيار القائم فقط على السير الذاتية</h2>
            <h2 className='text-sm md:text-xl text-zinc-900'>مهاراتك هي كل ما يهم</h2>
          </div>
          <div>
            <h1 className='text-base md:text-3xl font-bold text-zinc-900'>🕵️‍♂️ هل تبحث عن مطورين؟</h1>
            <h2 className='text-sm md:text-xl text-zinc-900'>ماذا لو أكدنا لك أن غالبية اقتراحاتنا سترضيك؟</h2>
          </div>
          <div className="flex">
            <a href='#' className='flex items-center p-2 px-3 w-fit text-sm self-start text-white bg-black fill-white bg-opacity-85 hover:bg-opacity-100 hover:shadow-2xl hover:shadow-gray-300 font-semibold rounded-md border border-black transition-all duration-300 ease-in-out'>
              <div className=''>اتصل بنا الآن</div>
              <div className="flex px-1"></div>
              <div className="flex rotate-180"><box-icon name='chevron-right'></box-icon></div>
            </a>
            <div className="flex px-1"></div>
            <a href='#' className='flex items-center p-2 px-3 w-fit text-sm self-start text-black bg-opacity-85 hover:bg-opacity-100 hover:shadow-2xl hover:shadow-gray-300 font-semibold rounded-md border border-black transition-all duration-300 ease-in-out'>
              <div className="flex invisible w-0"><box-icon name='chevron-right'></box-icon></div>    
              <div className=''>إكتشف عروض التوظيف</div>
              <div className="flex invisible w-0"><box-icon name='chevron-right'></box-icon></div>
            </a>
          </div>
        </div>
        
        <div className='md:group/all relative transition-all duration-500 ease-in-out animation-bounce'>
          <img src={"/6203116.jpg"} className="md:w-[32rem] w-[24rem] scale-[0.95] md:group-hover/all:scale-[1] md:group-hover/all:opacity-20 opacity-80 select-none md:group-hover/all:saturate-0 saturate-150 md:group-hover/all:blur-md blur-none transition-all duration-500 ease-in-out py-2 md:py-0" alt="logo" />
          {/*  */}
          <a href='#' className="md:group/item absolute ring ring-gray-200 hover:ring-blue-100 hidden md:flex items-center p-4 px-6 bg-white rounded-xl border top-32 left-0 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000032] transition-all duration-500 ease-in-out">
            <div className='flex scale-125 fill-zinc-600 md:group-hover/item:fill-blue-500 transition-all duration-500 ease-in-out'><box-icon name='check-circle'></box-icon></div>
            <div className="flex px-1"></div>
            <div className='space-y-2'>
              <div className='text-zinc-600 md:group-hover/item:text-blue-500 transition-all duration-500 ease-in-out'>التوظيف في مجال التقنية</div>
              <div className='space-y-1'>
                <div className='flex'><div className='bg-zinc-100 md:group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[90%] p-1 transition-all duration-500 ease-in-out'></div></div>
                <div className='flex'><div className='bg-zinc-100 md:group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[64%] p-1 transition-all duration-500 ease-in-out'></div></div>
              </div>
            </div>
          </a>
          {/*  */}
          <a href='#' className="md:group/item absolute ring ring-gray-200 hover:ring-blue-100 hidden md:flex items-center p-4 px-6 bg-white rounded-xl border top-64 left-52 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000032] transition-all duration-500 ease-in-out">
            <div className='flex scale-125 fill-zinc-600 md:group-hover/item:fill-blue-500 transition-all duration-500 ease-in-out'><box-icon name='check-circle'></box-icon></div>
            <div className="flex px-1"></div>
            <div className='space-y-2'>
              <div className='text-zinc-600 md:group-hover/item:text-blue-500 transition-all duration-500 ease-in-out'>التدريب في مجال التقنية</div>
              <div className='space-y-1'>
                <div className='flex'><div className='bg-zinc-100 md:group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[90%] p-1 transition-all duration-500 ease-in-out'></div></div>
                <div className='flex'><div className='bg-zinc-100 md:group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[64%] p-1 transition-all duration-500 ease-in-out'></div></div>
              </div>
            </div>
          </a>
          {/*  */}
          <a href='#' className="md:group/item absolute ring ring-gray-200 hover:ring-blue-100 hidden md:flex items-center p-4 px-6 bg-white rounded-xl border top-96 left-32 animate-[wave_8s_linear_infinite_300ms] shadow-xl shadow-[#00000032] transition-all duration-500 ease-in-out">
            <div className='flex scale-125 fill-zinc-600 md:group-hover/item:fill-blue-500 transition-all duration-500 ease-in-out'><box-icon name='check-circle'></box-icon></div>
            <div className="flex px-1"></div>
            <div className='space-y-2'>
              <div className='text-zinc-600 md:group-hover/item:text-blue-500 transition-all duration-500 ease-in-out'>استشارة في مجال التقنية</div>
              <div className='space-y-1'>
                <div className='flex'><div className='bg-zinc-100 md:group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[90%] p-1 transition-all duration-500 ease-in-out'></div></div>
                <div className='flex'><div className='bg-zinc-100 md:group-hover/item:bg-blue-100 bg-opacity-85 rounded w-[64%] p-1 transition-all duration-500 ease-in-out'></div></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero