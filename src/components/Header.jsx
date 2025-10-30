import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div>
            <header className="p-4 w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm">
                <div className="container flex justify-between h-16 mx-auto">
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
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/team"}
                                className="flex items-center px-4 -mb-1 font-bold"
                            >
                                BCF Team
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/board"}
                                className="flex items-center px-4 -mb-1 font-bold"
                            >
                                BCF Board
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/volunteer"}
                                className="flex items-center px-4 -mb-1 font-bold"
                            >
                                Volunteer
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/welfare"}
                                className="flex items-center px-4 -mb-1 font-bold"
                            >
                                Welfare
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                rel="noopener noreferrer"
                                to={"/contact"}
                                className="flex items-center px-4 -mb-1 font-bold"
                            >
                                Contact
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
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <Menu size={32} color="#000000" />
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
                            <button className="w-full text-left px-4 py-6 font-semibold border-b border-(--color-card-orange) text-black">
                                HOME
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
                            to={"/board"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold border-b border-(--color-card-orange) text-black">
                                BCF BOARD
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
                            to={"/welfare"}
                            onClick={() => setMobileOpen(false)}
                        >
                            <button className="w-full text-left px-4 py-6 font-semibold  border-b border-(--color-card-orange) text-black">
                                WELFARE
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
