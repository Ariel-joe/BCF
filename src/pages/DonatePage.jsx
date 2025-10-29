import React from 'react'
import PaymentOptions from '../components/PaymentOptions'

const Donatepage = () => {
  return (
    <>
    <section id="donation-content" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="w-full h-[400px] bg-neutral-400 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">Community Impact & Donation Communication</span>
          </div>
          
          
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl text-neutral-900 mb-6">Choose Your Payment Method</h2>
          
          <div className="mb-6">
            <PaymentOptions />
          </div>

          
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Donatepage