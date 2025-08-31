import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              About Mindery Kids
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, Mindery Kids was born from a simple belief: every child deserves the tools to navigate life's challenges with calm, confidence, and emotional intelligence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of child psychologists, educators, and mindfulness experts work together to create age-appropriate content that makes mindfulness accessible and engaging for children of all ages.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-600">Years of Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <div className="w-20 h-20 bg-green-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧘‍♀️</span>
                </div>
                <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🎨</span>
                </div>
                <div className="w-20 h-20 bg-indigo-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍🔬</span>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Expert Team</h3>
                <p className="text-gray-600">Child psychologists, educators, mindfulness experts, and developers working together for your child's wellbeing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
