
function Services() {
  // refs  
  return (
    <>
      <div className=''>
        <h1 className='md:text-3xl text-xl font-bold text-zinc-900 text-center'>Nos Services</h1>
        <div className='py-4 md:10'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8'>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/hr_service.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>Recrutement de profils IT</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>Aider les sociétés à bien rédiger leurs besoins en ressources</li>
                <li className='text-zinc-700 md:text-base text-xs'>Aider les sociétés à trouver les bons développeurs</li>
                <li className='text-zinc-700 md:text-base text-xs'>Aider les développeur à trouver des offres adaptées à leurs compétences</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/IT_coach.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>Formateur/Coach en IT</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>Accompagner les jeunes pour trouver les bonnes formations dont ils ont besoin</li>
                <li className='text-zinc-700 md:text-base text-xs'>Faire le suivi et l'accompagnement durant les formations</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/consultant_it.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>Consultation technique IT</h2>
              <ul className='list-disc pl-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>Architecture des systèmes d'informations</li>
                <li className='text-zinc-700 md:text-base text-xs'>Gestion et suivi des projets IT</li>
                <li className='text-zinc-700 md:text-base text-xs'>Oragnisation des évènements IT</li>
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