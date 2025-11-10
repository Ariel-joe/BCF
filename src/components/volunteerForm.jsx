import { useState } from "react";

const VolunteerForm = () => {
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                fName,
                lName,
                email,
                phone,
                subject,
                message,
            };

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwL72sSYO0nNZ3WVNe_ex2KhMnG4rK2IB2lbZMphcBnnW1SUP9J2t_KsgrO2J_ncCTV3A/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(formData),
                    headers: { "Content-Type": "application/json" },
                }
            );

            if (response.ok) {
                alert("Form submitted successfully!");
            } else {
                alert("Error submitting form");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <>
            <div className="w-full">
                <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-bold text-sm text-neutral-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={fName}
                                    onChange={(e) => setfName(e.target.value)}
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
                                    value={lName}
                                    onChange={(e) => setlName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="07..."
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2">
                                Subject
                            </label>
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                            >
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
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
                                htmlFor="newsletter"
                                className="text-sm text-neutral-600"
                            >
                                I would like to receive updates and newsletters
                                about your organization's work and impact.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-(--color-logo-orange) text-white rounded-md hover:bg-neutral-500"
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
