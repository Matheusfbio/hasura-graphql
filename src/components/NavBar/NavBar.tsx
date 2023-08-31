import { useKeycloak } from "@react-keycloak/web";

export default function NavBar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { keycloak } = useKeycloak();

  return (
    <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
      <div className="px-0 xl:px-12 py-6 flex w-full items-center">
        <h1 className="text-3xl font-bold font-heading">Keycloak TaskList</h1>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"></ul>
        <div className="hidden xl:flex items-center space-x-5">
          <a className="hover:text-blue-800" href="/secured">
            Secured Page
          </a>
          <div className="hover:text-gray-200">
            {!keycloak.authenticated && (
              <button
                type="button"
                className="text-blue-800"
                onClick={() => keycloak.login()}
              >
                Login
              </button>
            )}

            {!!keycloak.authenticated && (
              <button
                type="button"
                className="text-blue-800"
                onClick={() => keycloak.logout()}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
