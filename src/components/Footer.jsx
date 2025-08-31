import React from 'react'

const Footer = ({ onStartTrial }) => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-2xl font-bold">Mindery Kids</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Helping children develop mindfulness, emotional intelligence, and inner peace through 
              age-appropriate meditation and mindfulness practices.
            </p>
            <button onClick={onStartTrial} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Start Your Child's Journey
            </button>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Parent Resources</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mindery Kids. All rights reserved. Made with ❤️ for children's wellbeing.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">COPPA Certified • GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer