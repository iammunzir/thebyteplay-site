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
        setMessage('Welcome to the exclusive waitlist! Get ready for the ultimate gaming experience.')
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/logo-thebyteplay.svg"
              alt="The BytePlay Logo"
              width={200}
              height={80}
              className="mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            COMING SOON
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The ultimate gaming experience is loading. Get ready to level up with exclusive content, epic gameplay, and a community that never stops playing.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-3 text-purple-400">Epic Gaming Content</h3>
            <p className="text-gray-300">Exclusive gaming content, reviews, and insider access to the latest releases before anyone else.</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">VIP Community</h3>
            <p className="text-gray-300">Join an elite community of gamers with exclusive tournaments, events, and behind-the-scenes access.</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-pink-400">Early Access</h3>
            <p className="text-gray-300">Be the first to experience new features, beta games, and premium content before the public launch.</p>
          </div>
        </div>

        {/* Exclusive Waitlist Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-gradient-to-r from-purple-500 to-blue-500">
            <h2 className="text-2xl font-bold mb-2 text-center">Join the Exclusive Waitlist</h2>
            <p className="text-gray-400 text-center mb-6">Limited spots available. Secure your early access now.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your gaming email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining the Elite...' : 'Claim Your Spot'}
              </button>
            </form>
            
            {message && (
              <div className="mt-4 p-3 rounded-lg bg-purple-900/50 border border-purple-500/30">
                <p className="text-center text-purple-200">{message}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500">© 2025 The BytePlay. Get ready to play like never before.</p>
        </div>
      </div>
    </div>
  )
}
