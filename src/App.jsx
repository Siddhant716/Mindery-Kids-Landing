import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhyMinderySection from './components/WhyMinderySection'
import ProgramsSection from './components/ProgramsSection'
import BenefitsSection from './components/BenefitsSection'
import ComparisonSection from './components/ComparisonSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import AboutSection from './components/AboutSection'
import HelpSection from './components/HelpSection'
import Footer from './components/Footer'
import TrialModal from './components/TrialModal'

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false)

  const openTrialModal = () => setIsTrialModalOpen(true)
  const closeTrialModal = () => setIsTrialModalOpen(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onStartTrial={openTrialModal} />
      <main>
        <HeroSection onStartTrial={openTrialModal} />
        <WhyMinderySection />
        <ProgramsSection />
        <BenefitsSection />
        <ComparisonSection />
        <PricingSection onStartTrial={openTrialModal} />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <HelpSection />
      </main>
      <Footer onStartTrial={openTrialModal} />
      <TrialModal isOpen={isTrialModalOpen} onClose={closeTrialModal} />
    </div>
  )
}

export default App
