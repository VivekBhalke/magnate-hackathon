import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='flex px-70 text-2xl gap-15 py-8 w-full '>
            <NavLink to="/dashboard" className="hover:font-bold">Upload</NavLink>
            <NavLink to="/dashboard/lawyers" className="hover:font-bold">Connect With Lawyers</NavLink>
            <NavLink to="/dashboard/assistant" className="hover:font-bold">Document Assistant</NavLink>
        </div>
    )
}

export default Navbar
