import React from "react";

const MpesaOption = () => {
    return (
        <>
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
                Amount
            </label>
            <div className="relative mb-6">
                <input
                    type="number"
                    className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                    placeholder="ksh"
                />
            </div>
            <button class="w-full bg-[#30B54A] text-white py-4 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center">
                Donate with Mpesa
            </button>
        </>
    );
};

export default MpesaOption;
