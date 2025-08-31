# Mindery Kids Landing Page

A responsive and interactive landing page for Mindery Kids - a mindfulness and meditation platform designed specifically for children ages 4-14.

## 🚀 Tech Stack

- **React 18** - Modern frontend framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form handling and validation
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Animations** - Smooth Framer Motion animations throughout
- **Modal Form** - Popup form for "Start Free Trial" with validation
- **Modern UI** - Clean, child-friendly design with purple/blue gradient theme

### 📱 Sections Included
1. **Header** - Responsive navigation with mobile menu
2. **Hero Section** - Main title, description, and CTA buttons with animated mock app interface
3. **Why Mindery Kids** - Feature cards with icons and benefits
4. **Programs for Every Age** - Age-specific content sections (4-6, 7-10, 11-14)
5. **Built for Kids, Loved by Parents** - Benefits and research-backed stats
6. **Comparison Table** - Feature comparison with competitors
7. **Pricing Plans** - Three tiers (Starter, Premium, Family) with trial offers
8. **Testimonials** - Parent, teacher, and expert reviews with ratings
9. **FAQ Section** - Expandable questions and answers
10. **Footer** - Comprehensive links, newsletter signup, and social media

### 🎨 Design Features
- **Purple & Blue Gradient Theme** - Consistent with Mindery branding
- **Child-Safe Colors** - Soft, calming color palette
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Interactive Elements** - Buttons, cards, and forms with feedback
- **Mobile-First Design** - Responsive across all device sizes

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📋 Form Fields

The "Start Free Trial" modal collects:
- **Name** (required) - Parent/Guardian name
- **Email** (required) - Email address with validation
- **Phone Number** (optional) - Contact number
- **Class** (required) - Child's grade/age group dropdown
- **Message** (optional) - Additional information about the child

## 🎯 Key Components

### Header.jsx
- Responsive navigation
- Mobile hamburger menu
- Sticky positioning
- CTA button integration

### HeroSection.jsx
- Animated hero content
- Mock app interface
- Floating animated elements
- Dual CTA buttons

### TrialModal.jsx
- Form validation with React Hook Form
- Success state animation
- Responsive modal design
- Accessibility features

### PricingSection.jsx
- Three-tier pricing structure
- Discount banners
- Feature comparison
- Trial emphasis

## 🌟 Performance Optimizations

- **Vite** for fast development and building
- **Tailwind CSS** for optimized CSS bundle
- **Framer Motion** with efficient animations
- **Lazy loading** for scroll-triggered animations
- **Responsive images** and optimized assets

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Color Palette

```css
Primary Purple: #9333ea
Primary Blue: #0ea5e9
Success Green: #10b981
Warning Yellow: #f59e0b
Text Dark: #111827
Text Light: #6b7280
Background: #ffffff
```

## 🚀 Deployment

The project is ready for deployment on any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is created for demonstration purposes as part of a take-home frontend developer assessment.

---

**Built with ❤️ for children's mindfulness and wellbeing**
