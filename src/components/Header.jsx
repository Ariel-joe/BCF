import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [wOpen, setWOpen] = useState(false)

    return (
        <div>
            <header className="p-4 w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm">
                <div className="container flex justify-between items-center h-16 mx-auto">
                    <Link
                        rel="noopener noreferrer"
                        to={"/"}
                        aria-label="Back to homepage"
                        className="flex items-center p-2"
                    >
                        <img
                            src={"/logos/bcf-logo-nobg.png"}
                            alt="bcf logo"
                            className="h-18 w-full"
                        />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/"}
                                className="flex items-center px-4 -mb-1 font-bold"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="relative">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center px-4 py-3 mt-1 font-bold hover:text-(--color-logo-orange) transition"
                            >
                                Who We Are
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${
                                        open ? "rotate-180" : "rotate-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {open && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                    <li className="flex">
                                        <NavLink
                                            rel="noopener noreferrer"
                                            to="/board"
                                            className="flex items-center w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 hover:text-(--color-logo-orange)"
                                            onClick={() => setOpen(false)}
                                        >
                                            BCF Board
                                        </NavLink>
                                    </li>

                                    <li className="flex">
                                        <NavLink
                                            rel="noopener noreferrer"
                                            to="/team"
                                            className="flex items-center w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 hover:text-(--color-logo-orange)"
                                            onClick={() => setOpen(false)}
                                        >
                                            BCF Team
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/volunteer"}
                                className="flex items-center px-4 py-3 -mb-1 font-bold"
                            >
                                Volunteer
                            </NavLink>
                        </li>

                        {/* welfare dropwdown */}
                        <li className="relative">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setWOpen(!wOpen)}
                                className="flex items-center px-4 py-3 mt-1 font-bold hover:text-(--color-logo-orange) transition"
                            >
                                Welfare
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${
                                        wOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {wOpen && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                    <li className="flex">
                                        <NavLink
                                            rel="noopener noreferrer"
                                            to="/welfare/internal"
                                            className="flex items-center w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 hover:text-(--color-logo-orange)"
                                            onClick={() => setWOpen(false)}
                                        >
                                            Internal Welfare
                                        </NavLink>
                                    </li>

                                    <li className="flex">
                                        <NavLink
                                            rel="noopener noreferrer"
                                            to="/welfare/friendsofbeacon"
                                            className="flex items-center w-full px-4 py-3 font-bold text-gray-700 hover:bg-gray-100 hover:text-(--color-logo-orange)"
                                            onClick={() => setWOpen(false)}
                                        >
                                            Friends Of Beacon
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/contact"}
                                className="flex items-center px-4 py-3 -mb-1 font-bold"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/blog"}
                                className="flex items-center px-4 py-3 -mb-1 font-bold"
                            >
                                Blogs & Updates
                            </NavLink>
                        </li>
                    </ul>
                    <div className="items-center shrink-0 hidden lg:flex">
                        <Link
                            rel="noopener noreferrer"
                            to={"/donate"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="self-center px-8 py-3 font-semibold rounded bg-(--color-logo-orange) text-gray-100">
                                Donate
                            </button>
                        </Link>
                    </div>
                    <button
                        className="mt-4 lg:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded={mobileOpen ? "true" : "false"}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? (
                            <X size={32} color="#000000" />
                        ) : (
                            <Menu size={32} color="#000000" />
                        )}
                    </button>
                </div>
                {/* mobile navigation - toggled by Menu button */}
                {mobileOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden mt-4 space-y-3 h-dvh"
                    >
                        <Link
                            rel="noopener noreferrer"
                            to={"/"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold border-b border-(--color-card-orange) text-black animate__zoomIn">
                                HOME
                            </button>
                        </Link>

                        <Link
                            rel="noopener noreferrer"
                            to={"/board"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold border-b border-(--color-card-orange) text-black">
                                BCF BOARD
                            </button>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            to={"/team"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold border-b border-(--color-card-orange) text-black">
                                BCF TEAM
                            </button>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            to={"/volunteer"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold border-b border-(--color-card-orange) text-black">
                                VOLUNTEER
                            </button>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            to={"/welfare/internal"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold  border-b border-(--color-card-orange) text-black">
                                INTERNAL WELFARE
                            </button>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            to={"/welfare/friendsofbeacon"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold  border-b border-(--color-card-orange) text-black">
                                FRIENDS OF BEACON
                            </button>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            to={"/contact"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold  border-b border-(--color-card-orange) text-black">
                                CONTACT
                            </button>
                        </Link>

                        <Link
                            rel="noopener noreferrer"
                            to={"/blog"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold  border-b border-(--color-card-orange) text-black">
                                BLOGS & UPDATES
                            </button>
                        </Link>

                        <Link
                            rel="noopener noreferrer"
                            to={"/donate"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full px-4 py-3 font-semibold bg-(--color-logo-orange) text-gray-100">
                                Donate
                            </button>
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
};

export { Header };
