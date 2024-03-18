
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
          <div className=''>
            <a href='#' className='text-sm self-start text-black bg-transparent hover:bg-black hover:text-white hover:font-semibold hover:px-5 p-2 px-4 rounded-md border border-black hover:shadow-md transition-all duration-200 ease-in-out'>
              اتصل بنا الآن
            </a>
          </div>
        </div>
        <div className=''><img src={"/hr_hero.png"} className="w-[32rem] select-none" alt="logo" /></div>
      </div>
    </>
  )
}

export default Hero