"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, User, Mail, Building, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focused: { scale: 1.02, borderColor: "rgb(147 51 234)" },
    unfocused: { scale: 1, borderColor: "rgba(255,255,255,0.2)" },
  }

  const FormField = ({
    icon: Icon,
    label,
    field,
    type = "text",
    placeholder,
    isTextarea = false,
  }: {
    icon: any
    label: string
    field: keyof FormData
    type?: string
    placeholder: string
    isTextarea?: boolean
  }) => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        {isTextarea ? (
          <motion.textarea
            variants={inputVariants}
            animate={focusedField === field ? "focused" : "unfocused"}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none h-32"
            placeholder={placeholder}
            value={formData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
          />
        ) : (
          <motion.input
            variants={inputVariants}
            animate={focusedField === field ? "focused" : "unfocused"}
            type={type}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300"
            placeholder={placeholder}
            value={formData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
          />
        )}
      </div>
      <AnimatePresence>
        {errors[field] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center mt-2 text-red-400 text-sm"
          >
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors[field]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="h-10 w-10 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-300 mb-6">We've received your message and will get back to you within 24 hours.</p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField icon={User} label="Full Name" field="name" placeholder="Enter your full name" />
            <FormField icon={Mail} label="Email Address" field="email" type="email" placeholder="Enter your email" />
          </div>

          <FormField icon={Building} label="Company" field="company" placeholder="Enter your company name" />

          <FormField
            icon={MessageSquare}
            label="Message"
            field="message"
            placeholder="Tell us about your project and how AlignFlow can help..."
            isTextarea
          />

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg py-3 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </Card>
  )
}
