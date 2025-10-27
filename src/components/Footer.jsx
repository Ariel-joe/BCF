import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <>
            <footer id="footer" class="bg-(--color-logo-orange) text- py-12">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div class="flex items-center space-x-3 mb-4">
                                <span class="text-lg">
                                    The Beacon of Compassion
                                </span>
                            </div>
                            <p class="text-black-300 mb-4">
                                Lighting the way to a more compassionate world,
                                one community at a time.
                            </p>
                            <div class="flex space-x-4">
                                <i class="fa-brands fa-facebook text-xl text-black-300 hover:text-white cursor-pointer"></i>
                                <i class="fa-brands fa-twitter text-xl text-black-300 hover:text-white cursor-pointer"></i>
                                <i class="fa-brands fa-instagram text-xl text-black-300 hover:text-white cursor-pointer"></i>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li>
                                    <Link
                                        to="/"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/board"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        Board
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/volunteer"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        Volunteer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/welfare"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        Welfare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg mb-4">Get Involved</h4>
                            <ul class="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        class="text-neutral-300 hover:text-white"
                                    >
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-neutral-300 hover:text-white"
                                    >
                                        Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-neutral-300 hover:text-white"
                                    >
                                        Fundraise
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-neutral-300 hover:text-white"
                                    >
                                        Partner With Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg mb-4">Contact</h4>
                            <div class="space-y-2 text-neutral-300">
                                <div class="flex items-center">
                                    <i class="fa-solid fa-envelope mr-2"></i>
                                    <span>info@beaconcompassion.org</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fa-solid fa-phone mr-2"></i>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fa-solid fa-location-dot mr-2"></i>
                                    <span>
                                        123 Hope Street, City, State 12345
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-neutral-700 mt-8 pt-8 text-center text-black-400">
                        <p>
                            &copy; 2025 The Beacon of Compassion. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export { Footer };
