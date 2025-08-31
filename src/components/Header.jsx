import React, { useState } from 'react'

const Header = ({ onStartTrial }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Mindery Kids</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Programs</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-purple-600 font-medium transition-colors">About</button>
            <button onClick={() => scrollToSection('help')} className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Help</button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={onStartTrial} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-purple-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-purple-600 font-medium py-2 text-left">Programs</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-purple-600 font-medium py-2 text-left">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-purple-600 font-medium py-2 text-left">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-purple-600 font-medium py-2 text-left">About</button>
              <button onClick={() => scrollToSection('help')} className="text-gray-600 hover:text-purple-600 font-medium py-2 text-left">Help</button>
              <button onClick={onStartTrial} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold mt-4 w-full">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header