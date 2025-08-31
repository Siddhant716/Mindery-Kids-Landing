import React from 'react'

const ProgramsSection = () => {
  const timestamp = Date.now() // Force refresh with timestamp
  const randomNum = Math.floor(Math.random() * 10000) // Additional random number
  
  const programs = [
    {
      id: 1,
      title: 'Little Explorers (4-6)',
      description: 'Gentle introduction to mindfulness through stories, songs, and simple breathing exercises designed for our youngest learners.',
      duration: '5-10 min sessions',
      participants: '2.5K+ kids enrolled',
      features: ['Story-based learning', 'Simple breathing', 'Colorful animations', 'Parent guidance'],
      color: 'from-pink-400 to-purple-500',
      image: `https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?w=1200&h=1200&fit=crop&q=95&t=${timestamp}&r=${randomNum}`,
      emoji: '👶'
    },
    {
      id: 2,
      title: 'Brave Thinkers (7-10)',
      description: 'Interactive mindfulness activities that help children understand emotions, build focus, and develop self-awareness.',
      duration: '10-15 min sessions',
      participants: '4.2K+ kids enrolled',
      features: ['Emotion recognition', 'Focus games', 'Mindful movement', 'Achievement badges'],
      color: 'from-green-400 to-blue-500',
      image: `https://images.pexels.com/photos/1068731/pexels-photo-1068731.jpeg?w=1200&h=1200&fit=crop&q=95&t=${timestamp}&r=${randomNum}`,
      emoji: '🧒'
    },
    {
      id: 3,
      title: 'Calm & Confident (11-14)',
      description: 'Advanced mindfulness techniques to help pre-teens navigate social challenges, academic stress, and emotional changes.',
      duration: '15-20 min sessions',
      participants: '3.8K+ kids enrolled',
      features: ['Stress management', 'Social skills', 'Study focus', 'Peer support'],
      color: 'from-blue-400 to-indigo-500',
      image: `https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?w=1200&h=1200&fit=crop&q=95&t=${timestamp}&r=${randomNum}`,
      emoji: '👦'
    }
  ]

  return (
    <section id="programs" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Age-specific mindfulness programs designed to meet children where they are developmentally.
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`relative h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br ${program.color} overflow-hidden shadow-2xl`}>
                    {/* Full Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={program.image} 
                        alt={`Children in ${program.title} program`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-2xl">🌟</span>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <span className="text-xl">🧘</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="font-medium">{program.participants}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    Try Free Sample
                  </button>
                  <button className="border-2 border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
