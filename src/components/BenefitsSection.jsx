import React from 'react'

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built for Kids, Loved by Parents
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our evidence-based approach to children's mindfulness delivers real results that families can see and feel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-purple-600 mb-2">For Kids & Teens</h3>
              <div className="w-16 h-1 bg-purple-200 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">❤️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Emotional Wellness</h4>
                <p className="text-gray-600 text-sm">Learn to identify, understand, and manage emotions in healthy ways.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-2">Better Focus</h4>
                <p className="text-gray-600 text-sm">Improve concentration and attention span for better academic performance.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Stress Relief</h4>
                <p className="text-gray-600 text-sm">Develop coping strategies for anxiety, stress, and overwhelming situations.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Scientifically Validated</h3>
              <div className="w-16 h-1 bg-purple-200 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">😴</div>
                <h4 className="font-semibold text-gray-900 mb-2">Improved Sleep Quality</h4>
                <p className="text-gray-600 text-sm">Better sleep patterns and easier bedtime routines through calming practices.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🎨</div>
                <h4 className="font-semibold text-gray-900 mb-2">Enhanced Creativity</h4>
                <p className="text-gray-600 text-sm">Boost imagination and creative thinking through mindful exploration.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-2">Social Skills</h4>
                <p className="text-gray-600 text-sm">Develop empathy, kindness, and better relationships with peers and family.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-purple-600 mb-2">What Parents Say</h3>
              <div className="w-16 h-1 bg-purple-200 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🌟</div>
                <h4 className="font-semibold text-gray-900 mb-2">Whole-Child Approach</h4>
                <p className="text-gray-600 text-sm">Supports physical, emotional, and mental development holistically.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🔒</div>
                <h4 className="font-semibold text-gray-900 mb-2">Safe Environment</h4>
                <p className="text-gray-600 text-sm">Ad-free, privacy-focused platform designed specifically for children.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-gray-900 mb-2">Family Connection</h4>
                <p className="text-gray-600 text-sm">Strengthen family bonds through shared mindfulness practices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Backed by Research</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs are developed in partnership with child psychologists, educators, and mindfulness experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">87%</div>
              <div className="text-gray-600 text-sm">Improved Focus in School</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">92%</div>
              <div className="text-gray-600 text-sm">Better Emotional Regulation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">78%</div>
              <div className="text-gray-600 text-sm">Reduced Anxiety Levels</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600 text-sm">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection