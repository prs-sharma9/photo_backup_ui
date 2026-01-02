import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-blue-700/80 backdrop-blur-sm border-b border-blue-700 h-20">
      <div className="flex justify-between items-center w-[80%] py-5 mx-auto">
        <h1 className="text-gray-50/90 font-bold text-2xl md:text-5xl">
          Photo Backup
        </h1>
        <p
          className={`${
            user == null ? "hidden" : ""
          } text-gray-50/90 font-semibold text-sm md:text-lg py-2 px-3 md:p-3 md:px-4 rounded-full border border-white/60 active:bg-blue-700/60`}
          onClick={logout}
        >
          Logout
        </p>
      </div>
    </header>
  );
}

export default Header;
