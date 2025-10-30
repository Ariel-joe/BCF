import React from "react";

const ContactInfo = () => {
    return (
        <>
            <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                    Contact Information
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        
                        <div>
                            <p className="text-neutral-900 font-semibold">Address</p>
                            <p className="text-neutral-600">
                                Bogani Road opposite CUEA
                                <br />
                                St Clares Hostels
                                <br />
                                Nairobi, Karen
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        
                        <div>
                            <p className="text-neutral-900 font-semibold">Phone</p>
                            <p className="text-neutral-600">+254 111 62 8390</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        
                        <div>
                            <p className="text-neutral-900 font-semibold">Email</p>
                            <p className="text-neutral-600">
                                beaconcompassion07@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        
                        <div>
                            <p className="text-neutral-900 font-semibold">Office Hours</p>
                            <p className="text-neutral-600">
                                Monday - Friday
                                <br />
                                9:00 AM - 5:00 PM EAT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
