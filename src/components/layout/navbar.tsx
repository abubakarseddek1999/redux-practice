import { Link } from "react-router";

const NavBar = () => {
    return (
        <div>

            {/* Navigation Bar */}
            <nav className="bg-gray-800 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-lg font-bold">MyApp</div>
                    <div className="space-x-4">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/tasks" className="hover:underline">Tasks</Link>
                        <Link to="/users" className="hover:underline">Users</Link>
                        <a href="#" className="hover:underline">Services</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;