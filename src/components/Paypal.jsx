import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalOption = () => {
    return (
        <>
            <div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="p-4 border border-neutral-300 rounded-lg text-center hover:border-neutral-900 transition-colors">
                        <div className="text-xl text-neutral-900 mb-1">$25</div>
                        <div className="text-sm text-neutral-600">Basic</div>
                    </button>
                    <button className="p-4 border border-neutral-900 bg-neutral-50 rounded-lg text-center">
                        <div className="text-xl text-neutral-900 mb-1">$50</div>
                        <div className="text-sm text-neutral-600">Popular</div>
                    </button>
                    <button className="p-4 border border-neutral-300 rounded-lg text-center hover:border-neutral-900 transition-colors">
                        <div className="text-xl text-neutral-900 mb-1">
                            $100
                        </div>
                        <div className="text-sm text-neutral-600">Impact</div>
                    </button>
                </div>
                <label className="block text-sm text-neutral-700 mb-2">
                    Custom Amount
                </label>
                <div className="relative mb-6">
                    <span className="absolute left-3 top-3 text-neutral-600">
                        $
                    </span>
                    <input
                        type="number"
                        className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-neutral-900 focus:outline-none"
                        placeholder="Enter amount"
                    />
                </div>
                <div>
                    <PayPalScriptProvider options={{ clientId: "test" }}>
                        <PayPalButtons style={{ layout: "horizontal" }} />
                    </PayPalScriptProvider>
                </div>
            </div>
        </>
    );
};

export default PaypalOption;
