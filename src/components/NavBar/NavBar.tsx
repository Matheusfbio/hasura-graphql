export default function NavBar() {
  return (
    <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
      <div className="px-0 xl:px-12 py-6 flex w-full items-center">
        <h1 className="text-3xl font-bold font-heading">Keycloak TaskList</h1>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"></ul>
        <div className="hidden xl:flex items-center space-x-5">
          <div className="hover:text-gray-200">
            <button type="button" className="text-blue-800">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
