import { useState } from "react";
import { useFormSubmissionStore } from "../stores/useFormSubmissionStore";

const VolunteerForm = () => {
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("General Inquiry");
    const [message, setMessage] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const {
        postSubmission,
        loading,
        error: storeError,
    } = useFormSubmissionStore();

    const validateForm = () => {
        const newErrors = {};

        // First name validation
        if (!fName.trim()) {
            newErrors.fName = "First name is required";
        } else if (fName.trim().length < 2) {
            newErrors.fName = "First name must be at least 2 characters";
        }

        // Last name validation
        if (!lName.trim()) {
            newErrors.lName = "Last name is required";
        } else if (lName.trim().length < 2) {
            newErrors.lName = "Last name must be at least 2 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation
        const phoneRegex = /^(\+?254|0)?[17]\d{8}$/;
        if (!phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid Kenyan phone number";
        }

        // Subject validation
        if (!subject) {
            newErrors.subject = "Please select a subject";
        }

        // Message validation
        if (!message.trim()) {
            newErrors.message = "Message is required";
        } else if (message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        // Validate form
        if (!validateForm()) {
            return;
        }

        try {
            const formData = {
                FName: fName.trim(),
                LName: lName.trim(),
                email: email.trim().toLowerCase(),
                phone: phone.trim(),
                subject,
                message: message.trim(),
                newsletter,
            };

            const result = await postSubmission(formData);

            // Check if submission failed
            if (!result) {
                setErrors({
                    submit:
                        storeError || "Something went wrong! Please try again.",
                });
                return;
            }

            // Show success message
            setSubmitted(true);

            // Scroll to top to show thank you message
            window.scrollTo({ top: 0, behavior: "smooth" });

            // Reset form
            setfName("");
            setlName("");
            setEmail("");
            setPhone("");
            setSubject("General Inquiry");
            setMessage("");
            setNewsletter(false);
            setErrors({});

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error("Error:", error);
            setErrors({
                submit: "An unexpected error occurred. Please try again.",
            });
        }
    };

    // If form submitted successfully, show thank you message
    if (submitted) {
        return (
            <div className="w-full">
                <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
                    <div className="mb-6">
                        <svg
                            className="w-16 h-16 mx-auto text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                        Thank You!
                    </h2>
                    <p className="text-neutral-600 mb-6">
                        Your message has been successfully submitted. We
                        appreciate your interest and will get back to you as
                        soon as possible.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-700"
                    >
                        Submit Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <div className="space-y-6 w-full">
                    {errors.submit && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                            {errors.submit}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-bold text-sm text-neutral-700 mb-2">
                                First Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John"
                                value={fName}
                                onChange={(e) => {
                                    setfName(e.target.value);
                                    if (errors.fName) {
                                        setErrors({ ...errors, fName: "" });
                                    }
                                }}
                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent ${
                                    errors.fName
                                        ? "border-red-500"
                                        : "border-neutral-300"
                                }`}
                            />
                            {errors.fName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.fName}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2">
                                Last Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Doe"
                                value={lName}
                                onChange={(e) => {
                                    setlName(e.target.value);
                                    if (errors.lName) {
                                        setErrors({ ...errors, lName: "" });
                                    }
                                }}
                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent ${
                                    errors.lName
                                        ? "border-red-500"
                                        : "border-neutral-300"
                                }`}
                            />
                            {errors.lName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.lName}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-neutral-700 mb-2">
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) {
                                    setErrors({ ...errors, email: "" });
                                }
                            }}
                            placeholder="name@example.com"
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-neutral-300"
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-neutral-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                if (errors.phone) {
                                    setErrors({ ...errors, phone: "" });
                                }
                            }}
                            placeholder="0712345678"
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent ${
                                errors.phone
                                    ? "border-red-500"
                                    : "border-neutral-300"
                            }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-neutral-700 mb-2">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                                if (errors.subject) {
                                    setErrors({ ...errors, subject: "" });
                                }
                            }}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent ${
                                errors.subject
                                    ? "border-red-500"
                                    : "border-neutral-300"
                            }`}
                        >
                            <option>General Inquiry</option>
                            <option>Volunteer Opportunities</option>
                            <option>Partnership</option>
                            <option>Media Inquiry</option>
                            <option>Donation Question</option>
                            <option>Other</option>
                        </select>
                        {errors.subject && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.subject}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-neutral-700 mb-2">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows="6"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                if (errors.message) {
                                    setErrors({ ...errors, message: "" });
                                }
                            }}
                            placeholder="Tell us about your inquiry..."
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent ${
                                errors.message
                                    ? "border-red-500"
                                    : "border-neutral-300"
                            }`}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="newsletter"
                            checked={newsletter}
                            onChange={(e) => setNewsletter(e.target.checked)}
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
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export { VolunteerForm };
