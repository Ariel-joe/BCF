import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PaypalOption from "./Paypal";
import MpesaOption from "./MpesaOption";
import { PaystackDonation } from "./paystackOption";

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
                    <Tab
                        className={
                            "flex px-6 py-3 text-neutral-900 data-selected:border-b-2 data-selected:border-neutral-900 bg-white"
                        }
                    >
                        DEBIT/CREDIT CARD
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PaypalOption />
                    </TabPanel>
                    <TabPanel>
                        <MpesaOption />
                    </TabPanel>
                    <TabPanel>
                        <PaystackDonation />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </>
    );
};

export default PaymentOptions;


