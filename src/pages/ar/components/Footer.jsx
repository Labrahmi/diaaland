import 'boxicons'

function TrustedBy() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">DiaaLand</a>. جميع الحقوق محفوظة.</span>
          <ul className="flex flex-wrap items-center mt-2 text-sm font-medium text-gray-500 sm:mt-0">
          <li><a href="/" className="hover:underline me-4 md:me-6"><box-icon type='logo' name='instagram'></box-icon></a></li>
          <li><a href="/" className="hover:underline me-4 md:me-6"><box-icon name='facebook-circle' type='logo' ></box-icon></a></li>
          <li><a href="/" className="hover:underline me-4 md:me-6"><box-icon name='twitter' type='logo' ></box-icon></a></li>
          <li><a href="/" className="hover:underline me-4 md:me-6"><box-icon name='linkedin-square' type='logo' ></box-icon></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default TrustedBy