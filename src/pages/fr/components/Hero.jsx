
function Hero() {
  // refs  
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center h-[80vh] md:h-[70vh] md:mt-0'>
        <div className='space-y-8 md:w-[40%] md:pt-24'>
          <div>
            <h1 className='text-base md:text-3xl font-bold text-zinc-900'>👨‍💻 Êtes-vous un développeur ?</h1>
            <h2 className='text-sm md:text-xl text-zinc-900'>Au revoir la sélection basée seulement sur les CVs</h2>
            <h2 className='text-sm md:text-xl text-zinc-900'>Vos compétences c'est tout ce qui compte</h2>
          </div>
          <div>
            <h1 className='text-base md:text-3xl font-bold text-zinc-900'>🕵️‍♂️ Vous cherchez des développeurs?</h1>
            <h2 className='text-sm md:text-xl text-zinc-900'>Et si on vous assure que la majorité de nos propositions vont vous satisfaire?</h2>
          </div>
          <div className=''>
            <a href='#' className='text-sm self-start hover:bg-orange-400 hover:text-orange-50 text-orange-600 hover:font-semibold p-2 px-4 rounded-md border border-orange-600 hover:shadow-md transition-all duration-200 ease-in-out'>
              Contactez-nous maintenant
            </a>
          </div>
        </div>
        <div className=''><img src={"/hr_hero.png"} className="w-[32rem] select-none" alt="logo" /></div>
      </div>
    </>
  )
}

export default Hero