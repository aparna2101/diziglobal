import {
  Globe,
  Smartphone,
  BarChart3,
  Shield,
  Cloud,
  Palette,
  Code,
  Cpu,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Building2,
  Truck,
  Factory,
  HeartPulse,
  UtensilsCrossed,
  Store,
  Dumbbell,
  Scale,
  Plane,
  Search,
  PenTool,
  Rocket,
} from "lucide-react";


// navigation
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];


// services
export const services = [
  { icon: Globe, title: "Website Development", description: "User-friendly responsive websites that convert visitors into customers." },
  { icon: Smartphone, title: "App Development", description: "Android & iOS apps with smooth performance and modern UI." },
  { icon: BarChart3, title: "Software Development", description: "Custom software solutions tailored to your business goals." },
  { icon: Shield, title: "Digital Marketing", description: "SEO, Ads, and performance marketing to grow faster." },
  { icon: Cloud, title: "SEO Services", description: "Rank higher on Google and drive organic traffic." },
  { icon: Palette, title: "Local SEO", description: "Boost visibility for nearby customers and local searches." },
  { icon: Code, title: "Google Ads (PPC)", description: "Instant traffic & leads with smart paid campaigns." },
  { icon: Cpu, title: "Business Registration", description: "Complete business setup & registration support." },
];


// portfolio 
export const portfolioItems = [
  {
    title: "Quantum Energy",
    description: "Modern professional energy solutions website.",
    image: "quantumenergy.png",
    link: "https://quantumenergysolutions.ae/",
  },
  {
    title: "Golden Way Car Rental",
    description: "Premium car rental booking system.",
    image: "goldenwaycar.png",
    link: "https://goldenwaycarrental.ae/",
  },
  {
    title: "Max Care Laundry",
    description: "Laundry service with online scheduling.",
    image: "maxcare.png",
    link: "https://maxcarelaundry.com/",
  },

  
];


//INDUSTRIES 
export const industries = [
  { icon: GraduationCap, label: "Education", color: "text-blue-600" },
  { icon: Building2, label: "Real Estate", color: "text-orange-500" },
  { icon: Landmark, label: "Finance", color: "text-yellow-600" },
  { icon: ShoppingCart, label: "E-Commerce", color: "text-green-600" },
  { icon: Factory, label: "Manufacturing", color: "text-indigo-600" },
  { icon: HeartPulse, label: "Healthcare", color: "text-red-500" },
  { icon: Truck, label: "Supply Chain", color: "text-amber-600" },

  { icon: UtensilsCrossed, label: "Food & Beverage", color: "text-pink-600" },
  { icon: Store, label: "Small Business", color: "text-purple-600" },
  { icon: Dumbbell, label: "Sports & Fitness", color: "text-cyan-600" },
  { icon: Scale, label: "Law", color: "text-gray-700" },
  { icon: Plane, label: "Tours & Travel", color: "text-sky-600" },
  { icon: Rocket, label: "Startup", color: "text-emerald-600" },
  { icon: Cpu, label: "Technology", color: "text-blue-700" },
];


// PROCESS 
export const processSteps = [
  { icon: Search, step: "01", title: "Discover", description: "We analyze your needs and define strategy." },
  { icon: PenTool, step: "02", title: "Design", description: "Pixel-perfect UI/UX design process." },
  { icon: Rocket, step: "03", title: "Deliver", description: "Deploy with full testing & support." },
];


// TESTIMONIALS
export const testimonials = [
  {
    name: "Mohammed Rashid",
    city: "Salalah",
    message:
      "Our real estate website now attracts more leads than ever before. The layout is clean and optimized for conversions.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fatima Noor",
    city: "Sohar",
    message:
      "They built an elegant e-commerce store that loads fast and provides smooth shopping experience. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Hamdan Al Harthy",
    city: "Nizwa",
    message:
      "Professional team. Communication was smooth and delivery was on time. The entire process was stress-free.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ahmed Al Balushi",
    city: "Muscat",
    message:
      "Complete redesign handled flawlessly. The new design feels modern and perfectly represents our brand.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Mariam Al Farsi",
    city: "Muscat",
    message:
      "Simple yet professional website delivered exactly as expected. Great support and technical expertise.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];



export const faqs = [
  {
    question: "Which platforms do you build websites on?",
    answer: "React, WordPress, and custom stacks.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Usually 2–4 weeks.",
  },
  {
    question: "Do you offer custom website design or use templates?",
    answer: "100% custom design.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, complete redesign available.",
  },
  {
    question: "Is SEO included in the website design?",
    answer: "Basic SEO included.",
  },
  {
    question: "Can you integrate e-commerce features?",
    answer: "Yes, full e-commerce support.",
  },
  {
    question: "How much does a website cost in Oman?",
    answer: "Depends on requirements.",
  },
  {
    question: "Do you provide content and images for the website?",
    answer: "Yes, we assist with content.",
  },
];
