import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="text- py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="text-lg">
                                    The Beacon of Compassion
                                </span>
                            </div>
                            <p className="text-black-300 mb-4">
                                Lighting the way to a more compassionate world,
                                one community at a time.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to={
                                        "https://www.facebook.com/share/1Q68NS2ECq/"
                                    }
                                >
                                    <Facebook
                                        size={24}
                                        className="text-black-300 hover:text-white cursor-pointer"
                                    />
                                </Link>

                                <Link to={""}>
                                    <Twitter
                                        size={24}
                                        className="text-black-300 hover:text-white cursor-pointer"
                                    />
                                </Link>

                                <Link
                                    to={
                                        "https://www.instagram.com/beacon_compasion?igsh=YW45aGc4dzUzemNv"
                                    }
                                >
                                    <Instagram
                                        size={24}
                                        className="text-black-300 hover:text-white cursor-pointer"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
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
                            <h4 className="text-lg mb-4">Get Involved</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/donate"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Donate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/volunteer"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Volunteer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/donate"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Fundraise
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-black-300 hover:text-(--color-logo-orange)"
                                    >
                                        Partner With Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg mb-4">Contact</h4>
                            <div className="space-y-2 text-black-300">
                                <div className="flex items-center">
                                    <Mail size={18} className="mr-2" />
                                    <span>beaconcompassion07@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone size={18} className="mr-2" />
                                    <span>+254 111 62 8390</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin size={18} className="mr-2" />
                                    <span>
                                        Bogani Road opposite CUEA,
                                        <br /> St Clares Hostels, Nairobi, Karen
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin size={18} className="mr-2" />
                                    <span>
                                        P.O BOX 925 KAREN
                                        
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-black-400">
                        <p>
                            &copy; {new Date().getFullYear()} The Beacon of
                            Compassion. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export { Footer };
