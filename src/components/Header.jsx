import { Link, NavLink } from "react-router";

const Header = () => {
    return (
        <div>
            <header className="p-4">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link
                        rel="noopener noreferrer"
                        to={"/"}
                        aria-label="Back to homepage"
                        className="flex items-center p-2"
                    >
                       <img src={"/bcf-logo-nobg.png"} alt="bcf logo" className="h-15 w-full" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/"}
                                className="flex items-center px-4 -mb-1">
                                Home
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/board"}
                                className="flex items-center px-4 -mb-1"
                            >
                                Board
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/volunteer"}
                                className="flex items-center px-4 -mb-1"
                            >
                                Volunteer
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/welfare"}
                                className="flex items-center px-4 -mb-1"
                            >
                                Welfare
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/contact"}
                                className="flex items-center px-4 -mb-1"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="items-center shrink-0 hidden lg:flex">
                        <button className="self-center px-8 py-3 font-semibold rounded bg-(--color-logo-orange) text-gray-100">
                            Donate
                        </button>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export { Header };
