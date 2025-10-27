import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <>
            <footer id="footer" class="text- py-12">
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
                                <Facebook
                                    size={24}
                                    className="text-black-300 hover:text-white cursor-pointer"
                                />
                                <Twitter
                                    size={24}
                                    className="text-black-300 hover:text-white cursor-pointer"
                                />
                                <Instagram
                                    size={24}
                                    className="text-black-300 hover:text-white cursor-pointer"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li>
                                    <Link
                                        to="/"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/board"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Board
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/welfare"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Welfare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
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
                                    <Link
                                        to="/donate"
                                        class="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Donate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/volunteer"
                                        class="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Volunteer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/donate"
                                        class="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Fundraise
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/partner"
                                        class="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Partner With Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg mb-4">Contact</h4>
                            <div class="space-y-2 text-black-300">
                                <div class="flex items-center">
                                    <Mail size={18} className="mr-2" />
                                    <span>info@beaconcompassion.org</span>
                                </div>
                                <div class="flex items-center">
                                    <Phone size={18} className="mr-2" />
                                    <span>+254 700 00 00</span>
                                </div>
                                <div class="flex items-center">
                                    <MapPin size={18} className="mr-2" />
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
