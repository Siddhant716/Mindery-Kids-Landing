import React from 'react'

const ComparisonSection = () => {
  const features = [
    { feature: 'Age-Appropriate Content', mindery: true, others: 'Limited' },
    { feature: 'Child-Safe Environment', mindery: true, others: false },
    { feature: 'No Ads or Distractions', mindery: true, others: false },
    { feature: 'Scientific Backing', mindery: true, others: 'Partial' },
    { feature: 'Progress Tracking', mindery: true, others: 'Basic' },
    { feature: 'Family Dashboard', mindery: true, others: false },
    { feature: 'Offline Access', mindery: true, others: false },
    { feature: 'Multi-Device Sync', mindery: true, others: 'Limited' },
    { feature: '24/7 Support', mindery: true, others: false },
    { feature: 'Educator Resources', mindery: true, others: false }
  ]

  const renderValue = (value, isMindery = false) => {
    if (value === true) {
      return <div className={`flex items-center justify-center ${isMindery ? 'text-green-600' : 'text-green-500'}`}>✓</div>
    }
    if (value === false) {
      return <div className="flex items-center justify-center text-red-500">✗</div>
    }
    return <div className="flex items-center justify-center text-yellow-600 text-sm font-medium">{value}</div>
  }

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Mindery Kids Over Others?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we compare to other mindfulness apps and platforms designed for children.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">Features</h3>
            </div>
            <div className="p-6 text-center border-l border-white border-opacity-20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h3 className="font-bold text-lg">Mindery Kids</h3>
              </div>
            </div>
            <div className="p-6 text-center border-l border-white border-opacity-20">
              <h3 className="font-semibold text-lg">Other Apps</h3>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((item, index) => (
            <div key={item.feature} className="grid grid-cols-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100">
              <div className="p-6 font-medium text-gray-900">{item.feature}</div>
              <div className="p-6 border-l border-gray-100 bg-green-50">{renderValue(item.mindery, true)}</div>
              <div className="p-6 border-l border-gray-100">{renderValue(item.others)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection