'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      if (response.ok) {
        setMessage('Welcome to the team! Get ready for the ultimate AI experience.')
        setEmail('')
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-900">The BytePlay</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Research</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Dashboard</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          An AI Super Assistant For Enterprises And Professionals
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
          The BytePlay is the world's first AI super assistant built on our state-of-the-art generative AI technology
        </p>
        
        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Individuals and Small Teams</h3>
            <p className="text-gray-600 mb-6">
              BytePlay Chat is your all-in-one AI super assistant for chat, code, voice, images and video! Access to AI agents and top AI models.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              BytePlay Teams
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Enterprises</h3>
            <p className="text-gray-600 mb-6">
              BytePlay Enterprise offers an enterprise-class AI super assistant for all your employees and the world's first Gen AI platform where AI, not humans, build Applied AI systems.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Free Expert Consultation
            </button>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Agent - A General Purpose AI Agent That Can Perform Any Task
          </h2>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why The BytePlay?</h2>
          <p className="text-xl text-gray-600 mb-16">Platform Capabilities</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Super-Assistant</h3>
              <p className="text-gray-600">
                The AI Super-Assistant To Automate All Work
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Brain</h3>
              <p className="text-gray-600">
                Create An AI Brain For Your Organization
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Knowledge</h3>
              <p className="text-gray-600">
                Custom ChatLLM On Your Knowledge Base
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Exclusive Waitlist</h2>
            <p className="text-gray-600 mb-6">Limited spots available. Secure your early access now.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Claim Your Spot'}
              </button>
            </form>
            
            {message && (
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-blue-800">{message}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured On */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-8">FEATURED ON</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-400">Forbes</div>
            <div className="text-2xl font-bold text-gray-400">Wired</div>
            <div className="text-2xl font-bold text-gray-400">VentureBeat</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">BytePlay Chat</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">BytePlay Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Research</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Research Areas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Publications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Open-Source AI</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Culture</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Jobs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Copyright © 2025 The BytePlay. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
