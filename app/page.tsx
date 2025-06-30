"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Users,
  Zap,
  Target,
  CheckCircle,
  Play,
  Github,
  Twitter,
  Linkedin,
  Clock,
  MessageSquare,
  BarChart3,
  Shield,
  Workflow,
  Globe,
  Lightbulb,
  TrendingUp,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function AlignFlowWebsite() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [selectedComparison, setSelectedComparison] = useState<"before" | "after">("before")
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const workflowRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const workflowInView = useInView(workflowRef, { once: true })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <motion.div
                className="w-4 h-4 bg-white rounded-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
            <span className="text-xl font-bold">AlignFlow</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => smoothScrollTo("features")} className="hover:text-purple-300 transition-colors">
              Features
            </button>
            <button onClick={() => smoothScrollTo("workflow")} className="hover:text-purple-300 transition-colors">
              How it Works
            </button>
            <button onClick={() => smoothScrollTo("team")} className="hover:text-purple-300 transition-colors">
              Team
            </button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Animated Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-sm font-medium">Trusted by 10,000+ teams worldwide</span>
            </motion.div>

            {/* Main Title with Typing Effect */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              style={{ y: textY }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Perfect
              </motion.span>
              <motion.span
                className="block relative"
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]"
                >
                  Alignment
                </motion.span>
                <motion.div
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                </motion.div>
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Streamline cross-functional collaboration between{" "}
              <motion.span className="text-purple-300 font-semibold" whileHover={{ scale: 1.05 }}>
                product
              </motion.span>
              ,{" "}
              <motion.span className="text-blue-300 font-semibold" whileHover={{ scale: 1.05 }}>
                design
              </motion.span>
              , and{" "}
              <motion.span className="text-green-300 font-semibold" whileHover={{ scale: 1.05 }}>
                engineering
              </motion.span>
              . Our unified workspace ensures better alignment on features, timelines, and delivery expectations.
            </motion.p>

            {/* Interactive Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {[
                { value: "10K+", label: "Teams", color: "from-purple-500 to-pink-500" },
                { value: "99.9%", label: "Uptime", color: "from-blue-500 to-cyan-500" },
                { value: "50%", label: "Faster Delivery", color: "from-green-500 to-emerald-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    animate={heroInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 2.3 }}
            >
              <p className="text-sm text-gray-400 mb-4">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["Startup", "Scale-up", "Enterprise", "Fortune 500"].map((company, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium">{company}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated Flow Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </linearGradient>
            </defs>
            {[...Array(3)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${100 + i * 400},${200 + i * 150} Q${300 + i * 400},${100 + i * 150} ${500 + i * 400},${200 + i * 150} T${900 + i * 400},${200 + i * 150}`}
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={heroInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 1 + i * 0.3, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Floating Feature Cards */}
          {[
            { icon: "🎯", label: "Product", position: { top: "20%", left: "10%" } },
            { icon: "🎨", label: "Design", position: { top: "30%", right: "15%" } },
            { icon: "⚡", label: "Engineering", position: { bottom: "25%", left: "15%" } },
            { icon: "🚀", label: "Delivery", position: { bottom: "20%", right: "10%" } },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={item.position}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.5 + index * 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-white">{item.label}</div>
              </div>
            </motion.div>
          ))}

          {/* Particle System */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Interactive Alignment Visualization */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="relative w-96 h-96">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-purple-500/20 rounded-full"
                  style={{ scale: 0.3 + i * 0.3 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.5)",
                    "0 0 40px rgba(147, 51, 234, 0.8)",
                    "0 0 20px rgba(147, 51, 234, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>

          {/* Mouse-following Gradient Orbs */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.05,
              y: mousePosition.y * 0.05,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{ left: "20%", top: "20%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -0.03,
              y: mousePosition.y * -0.03,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{ right: "20%", bottom: "20%" }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => smoothScrollTo("features")}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(147,51,234,0.8)", "rgba(255,255,255,0.3)"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" ref={featuresRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Why Teams Choose AlignFlow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Break down silos and create seamless collaboration across your entire product development lifecycle.
            </p>
          </motion.div>

          {/* Before/After Comparison Toggle */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-full p-1 border border-white/10">
              <div className="flex">
                <motion.button
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedComparison === "before"
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setSelectedComparison("before")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Without AlignFlow
                </motion.button>
                <motion.button
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedComparison === "after"
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setSelectedComparison("after")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  With AlignFlow
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Comparison Scenarios */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedComparison}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8 mb-20"
            >
              {selectedComparison === "before"
                ? // Before AlignFlow
                  [
                    {
                      icon: MessageSquare,
                      title: "Scattered Communication",
                      description: "Teams use different tools, leading to missed messages and duplicated work.",
                      problems: [
                        "Slack, email, and meetings everywhere",
                        "Important decisions get lost",
                        "Context switching kills productivity",
                      ],
                      color: "from-red-500 to-orange-500",
                      bgColor: "bg-red-500/10",
                    },
                    {
                      icon: Clock,
                      title: "Misaligned Timelines",
                      description: "Each team works on different schedules without visibility into dependencies.",
                      problems: [
                        "Designers waiting for requirements",
                        "Engineers blocked by design",
                        "Product surprised by delays",
                      ],
                      color: "from-orange-500 to-yellow-500",
                      bgColor: "bg-orange-500/10",
                    },
                    {
                      icon: Target,
                      title: "Unclear Expectations",
                      description: "Goals and requirements change frequently without proper communication.",
                      problems: ["Scope creep is common", "Quality standards vary", "Delivery dates are unreliable"],
                      color: "from-yellow-500 to-red-500",
                      bgColor: "bg-yellow-500/10",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card
                        className={`${item.bgColor} backdrop-blur-lg border-red-500/20 p-8 h-full relative overflow-hidden`}
                      >
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <item.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-4 text-red-300">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.problems.map((problem, problemIndex) => (
                            <li key={problemIndex} className="text-sm text-gray-400 flex items-center">
                              <X className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                              {problem}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  ))
                : // After AlignFlow
                  [
                    {
                      icon: Users,
                      title: "Unified Workspace",
                      description: "Bring product, design, and engineering together in one collaborative environment.",
                      benefits: [
                        "All communication in one place",
                        "Shared context and history",
                        "Reduced tool switching",
                      ],
                      color: "from-purple-500 to-pink-500",
                      bgColor: "bg-purple-500/10",
                      demo: "Real-time chat with design reviews, code discussions, and product decisions all in context.",
                    },
                    {
                      icon: Zap,
                      title: "Real-time Sync",
                      description: "Keep everyone aligned with instant updates and synchronized project timelines.",
                      benefits: ["Automatic status updates", "Dependency tracking", "Proactive notifications"],
                      color: "from-blue-500 to-cyan-500",
                      bgColor: "bg-blue-500/10",
                      demo: "Live timeline showing when design is ready, code is complete, and features ship.",
                    },
                    {
                      icon: Target,
                      title: "Clear Expectations",
                      description: "Set and track delivery expectations with transparent milestone management.",
                      benefits: ["Defined success criteria", "Version-controlled requirements", "Predictable delivery"],
                      color: "from-green-500 to-emerald-500",
                      bgColor: "bg-green-500/10",
                      demo: "Interactive roadmap with clear milestones, acceptance criteria, and progress tracking.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card
                        className={`${feature.bgColor} backdrop-blur-lg border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                        onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                      >
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <feature.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>

                        <ul className="space-y-2 mb-4">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <motion.li
                              key={benefitIndex}
                              className="text-sm text-gray-300 flex items-center"
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: benefitIndex * 0.1 }}
                            >
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          className="text-xs text-purple-300 font-medium cursor-pointer flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          {activeFeature === index ? "Hide Demo" : "See Demo"}
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </motion.div>

                        {/* Expandable Demo */}
                        <AnimatePresence>
                          {activeFeature === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-white/10"
                            >
                              <div className="bg-white/5 rounded-lg p-4">
                                <p className="text-sm text-gray-300 italic">{feature.demo}</p>
                                <div className="mt-3 flex space-x-2">
                                  {[...Array(3)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${20 + i * 15}px` }}
                                      transition={{ delay: i * 0.2, duration: 0.5 }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  ))}
            </motion.div>
          </AnimatePresence>

          {/* Extended Feature Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 compliant with end-to-end encryption",
                features: ["SSO integration", "Audit logs", "Data encryption"],
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Workflow,
                title: "Custom Workflows",
                description: "Adapt AlignFlow to your team's unique processes",
                features: ["Flexible pipelines", "Custom fields", "Automation rules"],
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Globe,
                title: "Global Collaboration",
                description: "Work seamlessly across time zones and locations",
                features: ["Multi-timezone support", "Offline sync", "Mobile apps"],
                color: "from-green-500 to-teal-500",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Data-driven insights into team performance",
                features: ["Velocity tracking", "Bottleneck analysis", "Custom reports"],
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Lightbulb,
                title: "AI-Powered Insights",
                description: "Smart suggestions to improve collaboration",
                features: ["Predictive analytics", "Smart notifications", "Auto-categorization"],
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description: "Regular updates and feature enhancements",
                features: ["Weekly releases", "User feedback integration", "Beta program"],
                color: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-6 h-full hover:bg-white/10 transition-all duration-300 group">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Feature Showcase */}
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h3 className="text-3xl font-bold mb-4">Experience the Difference</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              See how AlignFlow transforms team collaboration with our interactive demo
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { metric: "3x", label: "Faster Onboarding", icon: "🚀" },
                { metric: "50%", label: "Fewer Meetings", icon: "📅" },
                { metric: "90%", label: "Team Satisfaction", icon: "😊" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={featuresInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-purple-300 mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4"
              >
                Try Interactive Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Workflow Section */}
      <section id="workflow" ref={workflowRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your team collaboration in four simple steps
            </p>
          </motion.div>

          {/* Interactive Workflow Visualization */}
          <div className="relative mb-20">
            {/* Background Flow Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 400">
                <defs>
                  <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
                    <stop offset="25%" stopColor="rgba(59, 130, 246, 0.8)" />
                    <stop offset="50%" stopColor="rgba(16, 185, 129, 0.8)" />
                    <stop offset="75%" stopColor="rgba(245, 158, 11, 0.8)" />
                    <stop offset="100%" stopColor="rgba(239, 68, 68, 0.8)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M100,200 Q300,100 500,200 T900,200 L1100,200"
                  stroke="url(#workflowGradient)"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={workflowInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                />
                {/* Animated particles along the path */}
                {[...Array(5)].map((_, i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill="rgba(255,255,255,0.8)"
                    initial={{ offsetDistance: "0%" }}
                    animate={workflowInView ? { offsetDistance: "100%" } : {}}
                    transition={{
                      duration: 4,
                      delay: 1 + i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      offsetPath: "path('M100,200 Q300,100 500,200 T900,200 L1100,200')",
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Interactive Step Cards */}
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Connect",
                  subtitle: "Integrate Your Tools",
                  description: "Seamlessly link your existing tools and workflows",
                  details: [
                    "Slack, Teams, Discord integration",
                    "GitHub, GitLab, Bitbucket sync",
                    "Figma, Sketch design tools",
                    "Jira, Linear, Asana project management",
                  ],
                  icon: "🔗",
                  color: "from-purple-500 to-pink-500",
                  tools: ["slack", "github", "figma", "jira"],
                },
                {
                  step: "02",
                  title: "Align",
                  subtitle: "Set Shared Goals",
                  description: "Establish clear objectives and expectations across teams",
                  details: [
                    "Define project milestones",
                    "Set delivery timelines",
                    "Assign team responsibilities",
                    "Create success metrics",
                  ],
                  icon: "🎯",
                  color: "from-blue-500 to-cyan-500",
                  tools: ["calendar", "metrics", "goals", "timeline"],
                },
                {
                  step: "03",
                  title: "Collaborate",
                  subtitle: "Work Together",
                  description: "Enable real-time collaboration across all functions",
                  details: [
                    "Live design reviews",
                    "Code review workflows",
                    "Cross-team communication",
                    "Shared documentation",
                  ],
                  icon: "🤝",
                  color: "from-green-500 to-emerald-500",
                  tools: ["chat", "review", "docs", "video"],
                },
                {
                  step: "04",
                  title: "Deliver",
                  subtitle: "Ship Faster",
                  description: "Accelerate delivery with streamlined processes",
                  details: [
                    "Automated status updates",
                    "Release coordination",
                    "Quality assurance",
                    "Performance tracking",
                  ],
                  icon: "🚀",
                  color: "from-orange-500 to-red-500",
                  tools: ["deploy", "monitor", "analytics", "success"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 100 }}
                  animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Step Number */}
                  <motion.div className="absolute -top-4 -left-4 z-20" whileHover={{ scale: 1.2 }}>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {item.step}
                    </div>
                  </motion.div>

                  {/* Main Card */}
                  <motion.div
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden group-hover:bg-white/10 transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <p
                      className={`text-sm font-medium mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.subtitle}
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                    {/* Expandable Details */}
                    <motion.div
                      className="space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-xs text-gray-400 mb-2 font-medium">Key Features:</p>
                        <ul className="space-y-1">
                          {item.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              className="text-xs text-gray-300 flex items-center"
                              initial={{ x: -10, opacity: 0 }}
                              whileHover={{ x: 0, opacity: 1 }}
                              transition={{ delay: detailIndex * 0.1 }}
                            >
                              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Tool Icons */}
                    <div className="flex space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={toolIndex}
                          className="w-6 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ delay: toolIndex * 0.1 }}
                        >
                          <div className="w-3 h-3 bg-gray-400 rounded-sm" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Connecting Line */}
                  {index < 3 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-white/50 to-transparent z-10"
                      initial={{ scaleX: 0 }}
                      animate={workflowInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.3 + 1 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Timeline */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Typical Implementation Timeline</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20" />
              <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: 0 }}
                animate={workflowInView ? { width: "100%" } : {}}
                transition={{ duration: 2, delay: 2 }}
              />

              {/* Timeline Points */}
              <div className="flex justify-between items-center relative">
                {[
                  { time: "Day 1", label: "Setup & Integration", duration: "2-4 hours" },
                  { time: "Week 1", label: "Team Onboarding", duration: "1-2 days" },
                  { time: "Week 2", label: "Full Collaboration", duration: "Ongoing" },
                  { time: "Month 1", label: "Optimized Workflow", duration: "Continuous" },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center relative z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={workflowInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 2.2 + index * 0.2 }}
                  >
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-2"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        boxShadow: ["0 0 0 0 rgba(147, 51, 234, 0.7)", "0 0 0 10px rgba(147, 51, 234, 0)"],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <div className="text-center">
                      <div className="text-sm font-bold text-white">{milestone.time}</div>
                      <div className="text-xs text-gray-300">{milestone.label}</div>
                      <div className="text-xs text-gray-400">{milestone.duration}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            {[
              {
                metric: "50%",
                label: "Faster Delivery",
                description: "Reduce time from concept to deployment",
                icon: "⚡",
                color: "from-yellow-500 to-orange-500",
              },
              {
                metric: "75%",
                label: "Fewer Meetings",
                description: "Eliminate unnecessary sync meetings",
                icon: "📅",
                color: "from-green-500 to-emerald-500",
              },
              {
                metric: "90%",
                label: "Team Satisfaction",
                description: "Improved collaboration experience",
                icon: "😊",
                color: "from-blue-500 to-purple-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl`}
                  whileHover={{ rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.6)",
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  animate={workflowInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2.8 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.metric}
                </motion.div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">{stat.label}</h4>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4"
                onClick={() => smoothScrollTo("team")}
              >
                See It In Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for Modern Teams</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by product teams at companies of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { role: "Product", icon: "🎯", description: "Define clear requirements and track progress" },
              { role: "Design", icon: "🎨", description: "Collaborate on user experience and visual design" },
              { role: "Engineering", icon: "⚡", description: "Build with clear specifications and timelines" },
            ].map((team, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{team.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{team.role}</h3>
                <p className="text-gray-300">{team.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {["Startup", "Scale-up", "Enterprise"].map((size, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-lg border border-white/20"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <CheckCircle className="inline mr-2 h-5 w-5 text-green-400" />
                  {size} Ready
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Align Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teams already using AlignFlow to streamline their collaboration and ship better products
              faster.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">14-Day Free Trial</h3>
                    <p className="text-gray-400">No credit card required</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Team Collaboration</h3>
                    <p className="text-gray-400">Unlimited team members</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Instant Setup</h3>
                    <p className="text-gray-400">Get started in minutes</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-gray-600 hover:bg-white/10 text-lg px-8 py-4"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>

              <p className="text-sm text-gray-400">
                Trusted by 10,000+ teams worldwide • SOC 2 compliant • 99.9% uptime
              </p>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <span className="text-xl font-bold">AlignFlow</span>
            </div>

            <div className="flex items-center space-x-6">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 AlignFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
