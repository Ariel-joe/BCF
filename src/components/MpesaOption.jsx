import React from "react";
import PaystackPop from "@paystack/inline-js";

const MpesaOption = () => {
    // send authorization request to the backend
    const handlePaystack = async () => {
        try {
            const data = {
                email: "arieljoe00@gmail.com",
                amount: 2000,
            };
            const response = await fetch(
                "http://localhost:3500/donations/initialize",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                const code = data.access_code;
            }

            const popup = new PaystackPop();

            popup.resumeTransaction(code);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            {" "}
            <form action="handlePaystack">
                <label className="block text-sm text-neutral-700 mb-2">
                    Phone Number
                </label>
                <div className="relative mb-6">
                    <input
                        type="Mpesa"
                        className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="07..."
                    />
                </div>
                <label className="block text-sm text-neutral-700 mb-2">
                    Email
                </label>
                <div className="relative mb-6">
                    <input
                        type="email"
                        className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="example@gmail.com"
                    />
                </div>
                <label className="block text-sm text-neutral-700 mb-2">
                    Amount
                </label>
                <div className="relative mb-6">
                    <input
                        type="amount"
                        className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="ksh"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full bg-[#30B54A] text-white py-4 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center"
                >
                    Donate
                </button>
            </form>
        </>
    );
};

export default MpesaOption;
