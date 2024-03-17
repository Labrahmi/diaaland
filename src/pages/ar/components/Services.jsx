
function Services() {
  // refs  
  return (
    <>
      <div className=''>
        <h1 className='md:text-3xl text-xl font-bold text-zinc-900 text-center'>خدماتنا</h1>
        <div className='py-4 md:10'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8'>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/hr_service.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>التوظيف في مجال التقنية</h2>
              <ul className='list-disc pr-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>مساعدة الشركات على كتابة متطلبات الموارد بشكل صحيح</li>
                <li className='text-zinc-700 md:text-base text-xs'>مساعدة الشركات في العثور على المطورين المناسبين</li>
                <li className='text-zinc-700 md:text-base text-xs'>مساعد المطورين في العثور على العروض المناسبة لمهاراتهم</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/IT_coach.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>التدريب والتوجيه في مجال التقنية</h2>
              <ul className='list-disc pr-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>دعم الشباب للعثور على التدريب المناسب الذي يحتاجونه</li>
                <li className='text-zinc-700 md:text-base text-xs'>توفير المراقبة والدعم أثناء التدريب</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='bg-white space-y-4 shadow-2xl hover:border-zinc-300 rounded-xl font-light shadow-gray-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out'>
            <div className='md:flex md:items-end md:h-52'><img src={"/consultant_it.png"} className="select-none mix-blend-darken" alt="logo" /></div>
            <hr/>
            <div className='space-y-2'>
              <h2 className='text-base md:text-xl font-bold text-zinc-900'>استشارة في مجال التقنية</h2>
              <ul className='list-disc pr-4 space-y-1'>
                <li className='text-zinc-700 md:text-base text-xs'>هندسة نظم المعلومات</li>
                <li className='text-zinc-700 md:text-base text-xs'>إدارة ومراقبة مشاريعت التقنية</li>
                <li className='text-zinc-700 md:text-base text-xs'>تنظيم أحداث تكنولوجيا المعلومات</li>
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