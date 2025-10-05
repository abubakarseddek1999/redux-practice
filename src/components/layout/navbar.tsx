import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const NavBar = () => {
    return (
        <div>

            {/* Navigation Bar */}
            <nav className="bg-gray-800 p-4 flex justify-between ">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-lg font-bold text-white">MyApp</div>
                    <div className="space-x-4 flex items-center">
                        <div className="space-x-4 text-white">
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/tasks" className="hover:underline">Tasks</Link>
                            <Link to="/users" className="hover:underline">Users</Link>
                            <a href="#" className="hover:underline">Services</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </div>
                        <div className="">
                            <ModeToggle />
                        </div>
                    </div>
                </div>

            </nav>


        </div>
    );
};

export default NavBar;