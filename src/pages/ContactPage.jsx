import React from 'react'
import  VolunteerForm from "../components/VolunteerForm";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";

const ContactPage = () => {
    return (
        <>
            <section
                id="contact-hero"
                className="bg-neutral-50 flex items-center py-20"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-2xl text-neutral-900 mb-6 font-bold marker-highlight">
                            Contact Us
                        </h1>
                        <p className="text-lg font-semibold text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            We'd love to hear from you. Get in touch with us for
                            inquiries, partnerships, or to learn more about how
                            you can get involved in our mission.
                        </p>
                    </div>
                </div>
            </section>
            <section id="contact-content" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <VolunteerForm />
                        </div>
                        <div className="space-y-8">
                            <ContactInfo />
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </section>
            <section id="map-section" className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="marker-highlight font-bold text-2xl text-neutral-900 mb-4">
                            Find Us
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold">
                            Visit our office or attend one of our community
                            events
                        </p>
                    </div>
                    <div className="rounded-lg h-96 flex items-center justify-center mb-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.4378773604776!2d36.75822286035629!3d-1.3556489045380187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f053f5e07ede5%3A0x11baf58b316e26f5!2sSt%20Clares%20Girls%20Hostels!5e0!3m2!1sen!2ske!4v1761806127398!5m2!1sen!2ske"
                            width="100%"
                            height="384"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage