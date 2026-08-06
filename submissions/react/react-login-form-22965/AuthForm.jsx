import React, { useState } from 'react';
import { Animate } from 'easemotion-react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden p-8 relative">
        
        {isLogin ? (
          <Animate type="slide-left" duration="fast" key="login">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back</h2>
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-lg" />
            <input type="password" placeholder="Password" className="w-full mb-6 p-3 border rounded-lg" />
            <Animate tag="button" hover="lift" className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg">
              Sign In
            </Animate>
            <p className="mt-4 text-center text-gray-500">
              Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(false)}>Register</span>
            </p>
          </Animate>
        ) : (
          <Animate type="slide-right" duration="fast" key="register">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>
            <input type="text" placeholder="Full Name" className="w-full mb-4 p-3 border rounded-lg" />
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-lg" />
            <input type="password" placeholder="Password" className="w-full mb-6 p-3 border rounded-lg" />
            <Animate tag="button" hover="lift" className="w-full bg-green-600 text-white font-bold p-3 rounded-lg">
              Register
            </Animate>
            <p className="mt-4 text-center text-gray-500">
              Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(true)}>Sign In</span>
            </p>
          </Animate>
        )}

      </div>
    </div>
  );
}
