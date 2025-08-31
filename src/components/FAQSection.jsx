import React, { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: 'What ages is Mindery Kids designed for?',
      answer: 'Mindery Kids is specifically designed for children ages 4-14. We have age-appropriate programs: Little Explorers (4-6), Brave Thinkers (7-10), and Calm & Confident (11-14).'
    },
    {
      question: 'How long are the meditation sessions?',
      answer: 'Session lengths vary by age group: 5-10 minutes for ages 4-6, 10-15 minutes for ages 7-10, and 15-20 minutes for ages 11-14. We also offer shorter 3-5 minute "quick calm" sessions.'
    },
    {
      question: 'Is it safe and ad-free?',
      answer: 'Absolutely! Mindery Kids is completely ad-free and designed with child safety as our top priority. We don\'t collect personal data from children and have no social features.'
    },
    {
      question: 'Can multiple children use one account?',
      answer: 'Yes! Our Family plan supports up to 6 child profiles, each with personalized content, progress tracking, and age-appropriate recommendations.'
    }
  ]

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Mindery Kids.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className="text-purple-600">
                  {openFAQ === index ? '−' : '+'}
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection