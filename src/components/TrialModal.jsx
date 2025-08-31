import React, { useState } from 'react'

const TrialModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: ''
  })

  const classOptions = [
    'Pre-K (Ages 4-5)', 'Kindergarten (Ages 5-6)', 'Grade 1 (Ages 6-7)', 'Grade 2 (Ages 7-8)',
    'Grade 3 (Ages 8-9)', 'Grade 4 (Ages 9-10)', 'Grade 5 (Ages 10-11)', 'Grade 6 (Ages 11-12)',
    'Grade 7 (Ages 12-13)', 'Grade 8 (Ages 13-14)', 'Homeschooled', 'Not in school yet'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', class: '', message: '' })
      onClose()
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
          {!isSubmitted ? (
            <>
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Start Free Trial</h2>
                  </div>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
                </div>
                <p className="text-gray-600">
                  Begin your child's mindfulness journey with our 7-day free trial. No credit card required!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Child's Grade/Class *</label>
                  <select
                    name="class"
                    required
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select grade/class</option>
                    {classOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your child (optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Any specific goals, challenges, or interests we should know about?"
                  />
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 text-sm mb-2">Your 7-day trial includes:</h4>
                  <div className="space-y-1 text-sm text-purple-700">
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Full access to all age-appropriate content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Family dashboard and progress tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>No commitment • Cancel anytime</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 mt-6">
                  Start Free Trial
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By starting your trial, you agree to our Terms of Service and Privacy Policy. No credit card required.
                </p>
              </form>
            </>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to Mindery Kids!</h3>
              <p className="text-gray-600 mb-6">
                Your free trial has started! Check your email for login details and getting started guide.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold">
                  Open App & Start Journey
                </button>
                <button onClick={onClose} className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 rounded-lg font-semibold">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrialModal