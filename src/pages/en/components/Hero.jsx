
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
          <div className=''>
            <a href='#' className='text-sm self-start text-black bg-transparent hover:bg-black hover:text-white hover:font-semibold hover:px-5 p-2 px-4 rounded-md border border-black hover:shadow-md transition-all duration-200 ease-in-out'>
              Contact us now
            </a>
          </div>
        </div>
        <div className=''><img src={"/hr_hero.png"} className="w-[32rem] select-none" alt="logo" /></div>
      </div>
    </>
  )
}

export default Hero