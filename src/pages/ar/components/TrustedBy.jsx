import Marquee from "react-fast-marquee";

function TrustedBy() {
  // refs  
  return (
    <>
      <div className='w-full text-center rounded-md text-black'>
        <h1 className='md:text-xl font-light p-4 py-14'>موثوق بها من قبل الشركات الناشئة</h1>
        <Marquee pauseOnHover={true} speed={30} className='space-x-4'>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac4529bf2158e4220d8bf_Fabric.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac452f392357b33639121_Williamsburg.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac452e34d7e34d544dd32_Agent%20IQ.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac4527a51f251021f9b70_DataHawk.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac532a4f55f34ee21dde7_Seraphine.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac4520387a534f4c08f47_Stocktwits.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac5326b2209078cbe1d79_Efficity.png"} className="w-36 select-none" alt="logo" />
          </div>
          <div className='md:px-2 select-none'>
            <img src={"https://assets-global.website-files.com/6514255a80796ba4e49bf3cf/654ac45235e332762126b972_Schneider%20Electric.png"} className="w-36 select-none" alt="logo" />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default TrustedBy