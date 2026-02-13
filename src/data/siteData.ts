import {
  Globe, Smartphone, BarChart3, Shield, Cloud, Palette, Code, Cpu,
  GraduationCap, Heart, ShoppingCart, Landmark, Building2, Truck,
  Search, PenTool, Rocket,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

export const services = [
  { icon: Globe, title: "Web Development", description: "Custom websites and web applications built with cutting-edge technologies for optimal performance." },
  { icon: Smartphone, title: "Mobile Solutions", description: "Cross-platform mobile apps that deliver seamless experiences on iOS and Android devices." },
  { icon: BarChart3, title: "Data Analytics", description: "Transform raw data into actionable insights with powerful analytics dashboards." },
  { icon: Shield, title: "Cybersecurity", description: "Protect your digital assets with enterprise-grade security solutions and audits." },
  { icon: Cloud, title: "Cloud Services", description: "Scalable cloud infrastructure and migration services for modern businesses." },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces designed to delight users and drive engagement." },
  { icon: Code, title: "API Integration", description: "Seamless third-party integrations to connect your systems and automate workflows." },
  { icon: Cpu, title: "AI & Automation", description: "Intelligent automation solutions powered by machine learning and artificial intelligence." },
];

export const portfolioItems = [
  { title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" },
  { title: "Healthcare Dashboard", category: "Data Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
  { title: "Finance Mobile App", category: "Mobile Solutions", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop" },
  { title: "Real Estate Portal", category: "Web Development", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" },
  { title: "Logistics Tracker", category: "Cloud Services", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" },
  { title: "Learning Management", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop" },
];

export const industries = [
  { icon: GraduationCap, label: "Education" },
  { icon: Heart, label: "Healthcare" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Landmark, label: "Finance" },
  { icon: Building2, label: "Real Estate" },
  { icon: Truck, label: "Logistics" },
];

export const processSteps = [
  { icon: Search, step: "01", title: "Discover", description: "We analyze your needs, research your market, and define a clear project roadmap." },
  { icon: PenTool, step: "02", title: "Design", description: "Our designers craft pixel-perfect interfaces that align with your brand identity." },
  { icon: Rocket, step: "03", title: "Deliver", description: "We develop, test, and deploy your solution with ongoing support and optimization." },
];

export const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, TechVentures", review: "Absolutely outstanding work. They transformed our vision into a powerful digital platform that exceeded every expectation.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { name: "James Cooper", role: "CTO, DataFlow Inc.", review: "The team's technical expertise and attention to detail are unmatched. Our analytics dashboard is now our most valuable asset.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Emily Zhang", role: "Founder, GreenLeaf", review: "From concept to launch, the process was seamless. Our e-commerce platform saw a 200% increase in conversions.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  { name: "Michael Torres", role: "Director, HealthFirst", review: "Their healthcare solution streamlined our operations and improved patient satisfaction scores dramatically.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
];

export const faqs = [
  { question: "What services do you offer?", answer: "We offer a comprehensive suite of digital services including web development, mobile app development, UI/UX design, cloud solutions, data analytics, cybersecurity, API integration, and AI-powered automation." },
  { question: "How long does a typical project take?", answer: "Project timelines vary based on complexity. A standard website takes 4–6 weeks, while complex applications may require 3–6 months. We provide detailed timelines during the discovery phase." },
  { question: "What is your pricing model?", answer: "We offer flexible pricing models including fixed-price projects, time-and-materials billing, and retainer agreements. Each project receives a custom quote based on its specific requirements." },
  { question: "Do you provide ongoing support?", answer: "Yes, we offer comprehensive post-launch support packages including maintenance, updates, performance monitoring, and feature enhancements to ensure your solution continues to perform optimally." },
  { question: "What technologies do you use?", answer: "We work with modern frameworks and tools including React, Node.js, Python, AWS, Azure, and more. We select the best technology stack based on your project's specific needs and goals." },
  { question: "How do you ensure project quality?", answer: "We follow agile methodologies with regular sprint reviews, automated testing, code reviews, and QA processes. Every deliverable goes through rigorous quality checks before deployment." },
];
