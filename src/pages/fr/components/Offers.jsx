
function Offers() {
  
  const offers = [
    {
      title: 'Senior JAVA Developer (Onsite)',
      location: 'Rabat, Morocco'
    },
    {
      title: 'Spontaneous Candidature (Future need)',
      location: 'Wroldwide'
    },
    {
      title: 'Senior SQL Developer (Onsite)',
      location: 'Casablanca, Casablanca-Settat, Morocco'
    },
    {
      title: 'Technical Lead JAVA (Onsite)',
      location: 'Laayoune, Morocco'
    },
    {
      title: 'Senior JAVA Developer (Onsite)',
      location: 'Rabat, Morocco'
    },
    {
      title: 'Spontaneous Candidature (Future need)',
      location: 'Wroldwide'
    }
  ]
  
  const offerClass = 'flex flex-col text-zinc-600 items-start space-y-2 bg-white border-l border-b-zinc-300 hover:border-l-orange-500 hover:border-l-4 shadow-2xl shadow-gray-200 rounded-md p-3 py-6 transition-all duration-300 ease-in-out cursor-pointer hover:text-black';
  
  return (
    <>
      <div className=''>
        <h1 className='md:text-3xl text-xl font-bold text-zinc-900 text-center'>Consulter des Offre disponible</h1>
        <div className='py-4'></div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {offers.map((offer, index) => {
              return (
                <div key={index} className={offerClass}>
                  <div className="font-semibold md:text-lg">{offer.title}</div>
                  <div className="md:text-sm text-xs text-zinc-600">📍 {offer.location}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='py-8 md:py-12'></div>
        <div className="flex justify-center w-full">
          <a href='#' className='flex items-center justify-center space-x-2 text-sm w-full md:w-fit self-start bg-orange-400 text-black bg-transparent hover:bg-black hover:text-white font-semibold p-2 px-4 hover:px-5 rounded-md border border-black hover:shadow-md transition-all duration-200 ease-in-out fill-black hover:fill-white'>
            <div>Déposer une Offre</div>
            <div className="flex"><box-icon name='link-external' ></box-icon></div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Offers