
const VolunteerForm = () => {
    return (
        <>
            <div className="">
                <div className="bg-white border border-neutral-200 rounded-lg p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-bold text-sm text-neutral-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-neutral-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="07..."
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2">
                                Subject
                            </label>
                            <select className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
                                <option>General Inquiry</option>
                                <option>Volunteer Opportunities</option>
                                <option>Partnership</option>
                                <option>Media Inquiry</option>
                                <option>Donation Question</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2">
                                Message
                            </label>
                            <textarea
                                rows="6"
                                placeholder="Tell us about your inquiry..."
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                            ></textarea>
                        </div>
                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="newsletter"
                                className="mt-1"
                            />
                            <label
                                for="newsletter"
                                className="text-sm text-neutral-600"
                            >
                                I would like to receive updates and newsletters
                                about your organization's work and impact.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export { VolunteerForm };
