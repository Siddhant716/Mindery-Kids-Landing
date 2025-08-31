import React from 'react'

const WhyMinderySection = () => {
  const features = [
    {
      title: 'Guided Meditation',
      description: 'Age-appropriate guided sessions that help kids learn mindfulness techniques in a fun and engaging way.',
      icon: '🧘‍♀️',
    },
    {
      title: 'Heart Rate Tracking',
      description: 'Real-time heart rate monitoring helps children understand their emotional states and learn self-regulation.',
      icon: '❤️',
    },
    {
      title: 'Calming Activities',
      description: 'Interactive breathing exercises, visualization games, and peaceful activities designed for young minds.',
      icon: '✨',
    },
    {
      title: 'Safe & Secure',
      description: 'Child-safe environment with no ads, no social features, and complete privacy protection for your family.',
      icon: '🔒',
    },
    {
      title: 'Family Dashboard',
      description: 'Parents can track progress, set goals, and join their children in mindfulness practices together.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Progress Tracking',
      description: 'Celebrate achievements with badges, streaks, and progress reports that motivate continued practice.',
      icon: '🏆',
    }
  ]

  return (
    <section id="features" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Mindery Kids?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Designed specifically for children ages 4-14, our platform combines proven mindfulness 
            techniques with engaging technology to help kids develop emotional intelligence and mental wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Schools Using</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Parent Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMinderySection