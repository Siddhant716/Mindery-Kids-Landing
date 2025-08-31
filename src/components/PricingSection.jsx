import React from 'react'

const PricingSection = ({ onStartTrial }) => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for trying out mindfulness with your child',
      features: ['3 guided sessions per week', 'Basic progress tracking', 'Access to breathing exercises', 'Bedtime stories (limited)', 'Community support'],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Premium',
      price: '£9.99',
      originalPrice: '£19.99',
      period: '/month',
      description: 'Full access to all features and content',
      features: ['Unlimited guided sessions', 'All age-appropriate programs', 'Advanced progress tracking', 'Family dashboard', 'Offline access', 'Priority support', 'Educational resources', 'Custom meditation plans'],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Family',
      price: '£24.99',
      originalPrice: '£39.99',
      period: '/month',
      description: 'Perfect for families with multiple children',
      features: ['Everything in Premium', 'Up to 6 child profiles', 'Family group sessions', 'Parent coaching sessions', 'School integration tools', 'Dedicated family advisor', 'Custom family challenges', 'Extended offline library'],
      buttonText: 'Start Free Trial',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start with our free plan and upgrade anytime. All paid plans include a 7-day free trial.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            ✨ Limited Time: 50% off first 3 months!
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular ? 'border-purple-200 bg-purple-50 transform scale-105 shadow-xl' : 'border-gray-200 shadow-lg'
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">
                      {plan.originalPrice}{plan.period}
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period !== 'Forever' && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="text-green-500 mt-0.5">✓</div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onStartTrial}
                className={`w-full text-lg py-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {plan.buttonText}
              </button>

              {plan.name !== 'Starter' && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  7-day free trial • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection