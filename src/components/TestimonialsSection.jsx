import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of 2',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Mindery Kids has been a game-changer for our family. My 7-year-old daughter now has tools to manage her emotions and my 10-year-old son sleeps better after the bedtime meditations.',
    },
    {
      name: 'Michael Chen',
      role: 'Elementary School Teacher',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'I use Mindery Kids in my classroom daily. The age-appropriate content keeps my students engaged while teaching them valuable life skills. The difference in their focus and behavior is remarkable.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Child Psychologist',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'As a child psychologist, I recommend Mindery Kids to parents regularly. The scientific approach and age-appropriate design make it an excellent tool for supporting children\'s emotional development.',
    }
  ]

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Families Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from parents, teachers, and experts who trust Mindery Kids to support children's mindfulness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Schools Using</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Parent Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-600">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection