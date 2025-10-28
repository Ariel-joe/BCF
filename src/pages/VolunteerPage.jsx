import { Calendar, ChartAreaIcon, Clock, GraduationCap, Hammer, Handshake, Heart, Laptop, Users, UsersIcon } from 'lucide-react';
import React from 'react'
import { VolunteerForm } from "../components/volunteerForm";

const VolunteerPage = () => {
    return (
        <>
            <section id="volunteers" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6 marker-highlight">
                            Our Volunteers
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold max-w-2xl mx-auto">
                            The heart of our organization - passionate
                            individuals who dedicate their time and skills to
                            make a difference.
                        </p>
                    </div>

                    <div className="bg-neutral-50 p-8 rounded-lg">
                        <h3 className="text-xl text-neutral-900 font-semibold mb-6 text-center">
                            Volunteer Opportunities
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg">
                                <GraduationCap />
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                                    Education Support
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Tutoring, mentoring, and educational program
                                    assistance.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <Hammer />
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                                    Community Building
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Help with construction, maintenance, and
                                    infrastructure projects.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <Laptop />
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                                    Digital Support
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Web development, social media, and digital
                                    marketing.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <Calendar />
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                                    Event Planning
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Organize fundraisers, community events, and
                                    awareness campaigns.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <Handshake />
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                                    Outreach
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Connect with communities and build
                                    partnerships.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <ChartAreaIcon />
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                                    Administrative
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Data entry, research, and office support
                                    tasks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section id="contact-content" class="py-20 bg-white">
                        <div class="max-w-7xl mx-auto px-6">
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div class="lg:col-span-2">
                                    <VolunteerForm />
                                </div>
                                <div class="space-y-8">
                                    <div class="bg-neutral-50 p-6 rounded-lg">
                                        <h3 class="text-xl text-neutral-900 mb-4">
                                            Contact Information
                                        </h3>
                                        <div class="space-y-4">
                                            <div class="flex items-start space-x-3">
                                                <i class="fa-solid fa-location-dot text-neutral-600 mt-1"></i>
                                                <div>
                                                    <p class="text-neutral-900">
                                                        Address
                                                    </p>
                                                    <p class="text-neutral-600">
                                                        123 Main Street
                                                        <br />
                                                        Suite 456
                                                        <br />
                                                        City, State 12345
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex items-start space-x-3">
                                                <i class="fa-solid fa-phone text-neutral-600 mt-1"></i>
                                                <div>
                                                    <p class="text-neutral-900">
                                                        Phone
                                                    </p>
                                                    <p class="text-neutral-600">
                                                        (555) 123-4567
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex items-start space-x-3">
                                                <i class="fa-solid fa-envelope text-neutral-600 mt-1"></i>
                                                <div>
                                                    <p class="text-neutral-900">
                                                        Email
                                                    </p>
                                                    <p class="text-neutral-600">
                                                        contact@organization.org
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex items-start space-x-3">
                                                <i class="fa-solid fa-clock text-neutral-600 mt-1"></i>
                                                <div>
                                                    <p class="text-neutral-900">
                                                        Office Hours
                                                    </p>
                                                    <p class="text-neutral-600">
                                                        Monday - Friday
                                                        <br />
                                                        9:00 AM - 5:00 PM EST
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-neutral-50 p-6 rounded-lg">
                                        <h3 class="text-xl text-neutral-900 mb-4">
                                            Follow Us
                                        </h3>
                                        <div class="grid grid-cols-2 gap-4">
                                            <a
                                                href="#"
                                                class="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                                            >
                                                <i class="fa-brands fa-facebook text-neutral-600"></i>
                                                <span class="text-neutral-700">
                                                    Facebook
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                class="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                                            >
                                                <i class="fa-brands fa-twitter text-neutral-600"></i>
                                                <span class="text-neutral-700">
                                                    Twitter
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                class="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                                            >
                                                <i class="fa-brands fa-instagram text-neutral-600"></i>
                                                <span class="text-neutral-700">
                                                    Instagram
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                class="flex items-center space-x-2 p-3 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
                                            >
                                                <i class="fa-brands fa-linkedin text-neutral-600"></i>
                                                <span class="text-neutral-700">
                                                    LinkedIn
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default VolunteerPage