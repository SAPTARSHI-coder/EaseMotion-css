import React, { useState } from 'react';
import { Animate } from 'easemotion-react';

export default function CheckoutFlow() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            {i}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Animate type="slide-left" duration="fast" key="step1">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
          <input type="text" placeholder="Address" className="w-full p-2 border rounded mb-4" />
          <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white p-2 rounded">Next</button>
        </Animate>
      )}

      {step === 2 && (
        <Animate type="slide-left" duration="fast" key="step2">
          <h2 className="text-xl font-bold mb-4">Payment Method</h2>
          <input type="text" placeholder="Card Number" className="w-full p-2 border rounded mb-4" />
          <button onClick={() => setStep(3)} className="w-full bg-blue-600 text-white p-2 rounded mb-2">Review Order</button>
          <button onClick={() => setStep(1)} className="w-full bg-gray-200 p-2 rounded">Back</button>
        </Animate>
      )}

      {step === 3 && (
        <Animate type="slide-up" duration="medium" key="step3">
          <h2 className="text-xl font-bold mb-4 text-green-600">Order Confirmed!</h2>
          <p>Your items are on the way.</p>
        </Animate>
      )}
    </div>
  );
}
