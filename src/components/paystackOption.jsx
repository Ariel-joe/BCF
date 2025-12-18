import React, { useState, useEffect } from "react";
import PaystackPop from "@paystack/inline-js";
import { useDonationStore } from "../stores/donationStore";

const PaystackDonation = () => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        amount: "",
    });

    const { loading, error, success, initiateDonation, verifyDonation, reset } = useDonationStore();

    // Reset success message after showing
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                reset();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [success, reset]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePaystack = async (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.email || !formData.amount || !formData.firstName || !formData.lastName) {
            console.error("Please fill in all fields");
            return;
        }

        // Validate amount (minimum 100 KES)
        const amountValue = parseFloat(formData.amount);
        if (isNaN(amountValue) || amountValue < 100) {
            console.error("Amount must be at least KES 100");
            return;
        }

        try {
            // Initialize transaction via Zustand store
            const data = await initiateDonation({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                amount: amountValue,
            });

            if (!data.data.access_code) {
                throw new Error("Failed to get access code");
            }

            // Initialize Paystack Popup with PUBLIC KEY only
            const popup = new PaystackPop();

            popup.resumeTransaction(data.data.access_code, {
                onSuccess: (transaction) => {


                    // Reset form
                    setFormData({
                        email: "",
                        firstName: "",
                        lastName: "",
                        amount: "",
                    });

                    // Verify transaction via Zustand store
                    verifyDonation(transaction.reference);
                },
                onCancel: () => {
                    console.log("Payment cancelled");
                },
                onError: (error) => {
                    console.error("Payment error:", error);
                },
            });
        } catch (error) {
            console.error("Payment initialization error:", error);
        }
    };

    return (
        <div>
            {/* Success Message */}
            {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Donation successful! Thank you for your support. 🎉
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            <form onSubmit={handlePaystack}>
                <label className="block text-sm text-neutral-700 mb-2">
                    First Name *
                </label>
                <div className="relative mb-6">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="John"
                        required
                    />
                </div>

                <label className="block text-sm text-neutral-700 mb-2">
                    Last Name *
                </label>
                <div className="relative mb-6">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="Doe"
                        required
                    />
                </div>

                <label className="block text-sm text-neutral-700 mb-2">
                    Email *
                </label>
                <div className="relative mb-6">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <label className="block text-sm text-neutral-700 mb-2">
                    Amount (KES) *
                </label>
                <div className="relative mb-6">
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="100"
                        min="100"
                        step="1"
                        required
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                        Minimum amount: KES 100
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                    {loading ? "Processing..." : "Donate"}
                </button>
            </form>
        </div>
    );
};

export { PaystackDonation };