import React from 'react'

const HeroSection = ({ onStartTrial }) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              ✨ Trusted by 10,000+ families
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mindfulness &
              <br />
              <span className="text-purple-600">Meditation for Kids</span>
              <br />
              <span className="text-2xl lg:text-4xl text-gray-600 font-medium">(4-14)</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Help your child develop emotional intelligence, focus, and resilience through 
              age-appropriate mindfulness and meditation practices designed specifically for young minds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onStartTrial} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-purple-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">Parents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-indigo-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-red-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-teal-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">Schools</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mock App Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Daily Journey</h3>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-200 rounded-lg"></div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">Morning Breathing</div>
                      <div className="text-xs text-gray-500">5 min • Completed</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-200 rounded-lg"></div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">Focus Time</div>
                      <div className="text-xs text-gray-500">10 min • In Progress</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg opacity-60">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">Bedtime Stories</div>
                      <div className="text-xs text-gray-500">8 min • Locked</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Weekly Progress</span>
                    <span className="font-semibold text-purple-600">4/7 days</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '57%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">🌟</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">🧘</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection