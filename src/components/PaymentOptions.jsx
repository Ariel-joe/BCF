import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PaypalOption from "./Paypal";
import MpesaOption from "./MpesaOption";

const PaymentOptions = () => {
    return (
        <>
            <TabGroup>
                <TabList className={"mb-6 flex gap-1"}>
                    <Tab
                        className={
                            "flex items-center px-6 py-3 text-neutral-900 data-selected:border-b-2 data-selected:border-neutral-900 bg-white"
                        }
                    >
                        <img
                            src={"/logos/paypal.png"}
                            alt="paypal logo"
                            className="h-5 w-5 mr-2"
                        />
                        PayPal
                    </Tab>
                    <Tab
                        className={
                            "flex px-6 py-3 text-neutral-900 data-selected:border-b-2 data-selected:border-neutral-900 bg-white"
                        }
                    >
                        <img
                            src={"/logos/mpesa.png"}
                            alt="mpesa logo"
                            className="h-5 w-full"
                        />
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PaypalOption />
                    </TabPanel>
                    <TabPanel>
                        <MpesaOption />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </>
    );
};

export default PaymentOptions;

{
    /* <div className="mb-6">
    <div className="flex border-b border-neutral-200">
        <button className="px-6 py-3 text-neutral-900 border-b-2 border-neutral-900 bg-white">
            <i className="fa-brands fa-paypal mr-2"></i>PayPal/Debit or Credit
            Card
        </button>

        <button className="px-6 py-3 text-neutral-600 hover:text-neutral-900 bg-white">
            <i className="fa-solid fa-mobile-alt mr-2"></i>Mobile Money
        </button>
    </div>
</div>; */
}
