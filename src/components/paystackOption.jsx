import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const PaystackDonation = () => {
    const [formData, setFormData] = useState({
        email: "",
        amount: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePaystack = async (e) => {
        e.preventDefault();

        const url = `${process.env.VITE_SERVER_URL}/api/v1/donation/initiate`;

        // Validate form
        if (!formData.email || !formData.amount || !formData.phone) {
            console.error("Please fill in all fields");
            return;
        }

        // Validate amount (minimum 100 KES)
        const amountValue = parseFloat(formData.amount);
        if (isNaN(amountValue) || amountValue < 100) {
            console.error("Amount must be at least KES 100");
            return;
        }

        setLoading(true);

        try {
            // Initialize transaction on your backend
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    amount: amountValue * 100, // Paystack expects amount in kobo/cents
                    phone: formData.phone,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to initialize payment");
            }

            const data = await response.json();

            console.log("response with access code", data);

            if (!data.success || !data.data.access_code) {
                throw new Error(data.message || "Failed to get access code");
            }

            // Initialize Paystack Popup
            const popup = new PaystackPop();

            popup.resumeTransaction(data.data.access_code, {
                onSuccess: (transaction) => {
                    // Payment successful
                    console.log("Payment successful:", transaction);
                    console.log(
                        "Donation successful! Thank you for your support."
                    );

                    // Reset form
                    setFormData({
                        email: "",
                        amount: "",
                        phone: "",
                    });

                    // Optional: Verify transaction on your backend
                    verifyTransaction(transaction.reference);
                },
                onCancel: () => {
                    // User closed the popup
                    console.log("Payment cancelled");
                },
                onError: (error) => {
                    // Payment failed
                    console.error("Payment error:", error);
                    console.error("Payment failed. Please try again.");
                },
            });
        } catch (error) {
            console.error("Payment initialization error:", error);
            console.error(error.message || "Failed to initialize payment");
        } finally {
            setLoading(false);
        }
    };

    // Optional: Verify transaction on backend
    const verifyTransaction = async () => {
        try {

            const url = `${process.env.VITE_SERVER_URL}/api/v1/donation/verify/${reference}`;
            await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (error) {
            console.error("Verification error:", error);
        }
    };

    return (
        <form onSubmit={handlePaystack}>
            <label className="block text-sm text-neutral-700 mb-2">
                Phone Number *
            </label>
            <div className="relative mb-6">
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                    placeholder="254712345678"
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
                    placeholder="example@gmail.com"
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
                    placeholder="1000"
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
                className="w-full bg-[#30B54A] text-white py-4 rounded-lg hover:bg-[#28a042] disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
                {loading ? "Processing..." : "Donate"}
            </button>
        </form>
    );
};

export { PaystackDonation };
