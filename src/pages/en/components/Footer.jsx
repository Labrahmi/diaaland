// import 'boxicons'

function TrustedBy() {
  return (
    <footer className="rounded-lg bg-white">
      <hr/>
      <div className="w-full mx-auto max-w-screen-xl p-4 pb-2 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="/" className="hover:underline">DiaaLand™</a>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-2 text-sm font-medium text-gray-500 sm:mt-0">
          <li><a aria-label="our instagram account" href="/" className="hover:underline me-4 md:me-6"><box-icon name='instagram' type='logo'></box-icon></a></li>
          <li><a aria-label="our facebook account" href="/" className="hover:underline me-4 md:me-6"><box-icon name='facebook' type='logo' ></box-icon></a></li>
          <li><a aria-label="our twitter account" href="/" className="hover:underline me-4 md:me-6"><box-icon type='logo' name='twitter'></box-icon></a></li>
          <li><a aria-label="our linkedin account" href="/" className="hover:underline me-4 md:me-6"><box-icon name='linkedin' type='logo' ></box-icon></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default TrustedBy