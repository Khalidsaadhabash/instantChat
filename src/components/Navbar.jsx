import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-zinc-100 text-neutral-content ">
      <div className="containerWrap flex justify-between">
        <a href="http://localhost:5174/" className="btn btn-ghost normal-case text-slate-700 text-xl">
      <h1>Fitness <span className='  bg-orange-500 text-gray-100  md:mx-2 font-bold bg-opacity-40 hover:bg-slate-400 hover:bg-opacity-30'>AI</span></h1>
        </a>
        {currentUser ? <button onClick={handleLogout} className="text-black font-medium">Logout</button> : ""}
      </div>
    </div>
  )
}

export default Navbar