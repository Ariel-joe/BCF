import React from 'react'
import PaymentOptions from '../components/PaymentOptions'

const DonationPage = () => {
  return (
      <>
          <section id="donation-hero" className="bg-neutral-50 py-16">
              <div className="container mx-auto px-6">
                  <div className="text-center">
                      <h1 className="text-2xl font-bold text-neutral-900 mb-4 marker-highlight">
                          Make a Difference Today
                      </h1>
                      <p className="text-lg font-semibold text-neutral-600 max-w-2xl mx-auto">
                          Your donation helps us continue our mission of
                          spreading compassion and hope across Kenya. Every
                          contribution makes a real impact.
                      </p>
                  </div>
              </div>
          </section>
          <section id="donation-content" className="py-16 bg-white">
              <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      <div className="space-y-8">
                              <img src={"/donation.jpg"} alt="donation" className='w-full h-[400px] object-cover rounded-lg' />
                          
                      </div>

                      <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm">
                          <h2 className="text-2xl text-neutral-900 mb-6">
                              Choose Your Payment Method
                          </h2>

                          <div className="mb-6">
                              <PaymentOptions />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default DonationPage