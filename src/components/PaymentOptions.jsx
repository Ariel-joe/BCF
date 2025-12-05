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
                            "flex items-center justify-between py-3 text-neutral-900 data-selected:border-b-2 data-selected:border-neutral-900 bg-white"
                        }
                    >
                        <img
                            src={"/logos/mobile-money.png"}
                            alt="mpesa logo"
                            className="h-7 w-full"
                        />
                        <img
                            src={"/logos/visa-mastercard.png"}
                            alt="mpesa logo"
                            className="h-7 w-full"
                        />
                        <img
                            src={"/logos/american-express.png"}
                            alt="mpesa logo"
                            className="h-7 w-full"
                        />
                    </Tab>
                    {/* <Tab
                        className={
                            "flex items-center px-6 py-3 text-neutral-900 data-selected:border-b-2 data-selected:border-neutral-900 bg-white"
                        }
                    >
                        <img
                            src={"/logos/paypal.png"}
                            alt="paypal logo"
                            className="h-5 w-5 mr-2"
                        />
                    </Tab> */}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PaystackDonation />
                    </TabPanel>
                    {/* <TabPanel>
                        <PaypalOption />

                        <p>currently not available</p>
                    </TabPanel> */}
                </TabPanels>
            </TabGroup>
        </>
    );
};

export default PaymentOptions;


