import React from 'react'

const HelpSection = () => {
  const helpTopics = [
    {
      title: 'Getting Started',
      description: 'Learn how to set up your account and get your child started with mindfulness.',
      icon: '🚀',
      link: '#getting-started'
    },
    {
      title: 'Account & Billing',
      description: 'Manage your subscription, update payment methods, and view billing history.',
      icon: '💳',
      link: '#billing'
    },
    {
      title: 'Technical Support',
      description: 'Get help with app issues, device compatibility, and troubleshooting.',
      icon: '🔧',
      link: '#support'
    },
    {
      title: 'Content & Programs',
      description: 'Learn about our programs, age groups, and how to choose the right content.',
      icon: '📚',
      link: '#content'
    },
    {
      title: 'Parent Resources',
      description: 'Access guides, tips, and resources to support your child\'s mindfulness journey.',
      icon: '👨‍👩‍👧‍👦',
      link: '#resources'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our support team for personalized assistance.',
      icon: '📞',
      link: '#contact'
    }
  ]

  return (
    <section id="help" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Can We Help?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions, get support, and access helpful resources to make the most of Mindery Kids.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {helpTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {topic.description}
              </p>
              <a href={topic.link} className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our support team is here to help you and your child get the most out of Mindery Kids. 
            We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Email Support
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpSection
