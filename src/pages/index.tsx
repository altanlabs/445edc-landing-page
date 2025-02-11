import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Cog, Brain, RefreshCw } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-4 py-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          AI-Powered Investment Solutions
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground max-w-[800px]">
          Transforming Investments Through
          <span className="text-blue-600 dark:text-blue-400"> AI Innovation</span>
        </h1>
        <p className="mt-6 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          We help investors maximize value through AI-driven turnaround strategies, industrial optimization, and intelligent automation solutions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <RefreshCw className="h-12 w-12 text-blue-600" />
              <h3 className="text-2xl font-semibold">Turnaround Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Strategic transformation of underperforming assets using AI-driven insights and proven methodologies.
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Cog className="h-12 w-12 text-blue-600" />
              <h3 className="text-2xl font-semibold">Industrial Optimization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enhance operational efficiency through advanced analytics and AI-powered process optimization.
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Brain className="h-12 w-12 text-blue-600" />
              <h3 className="text-2xl font-semibold">AI Automation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Implement cutting-edge AI solutions to automate processes and drive sustainable growth.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            Our AI-driven approach has helped investors achieve significant returns through strategic optimization and intelligent automation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="space-y-2">
            <BarChart3 className="h-8 w-8 text-blue-600 mx-auto" />
            <h3 className="text-4xl font-bold">30%+</h3>
            <p className="text-gray-500 dark:text-gray-400">Average Efficiency Gain</p>
          </div>
          <div className="space-y-2">
            <BarChart3 className="h-8 w-8 text-blue-600 mx-auto" />
            <h3 className="text-4xl font-bold">50M+</h3>
            <p className="text-gray-500 dark:text-gray-400">Cost Savings Delivered</p>
          </div>
          <div className="space-y-2">
            <BarChart3 className="h-8 w-8 text-blue-600 mx-auto" />
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-gray-500 dark:text-gray-400">Successful Projects</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-24">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Investment Portfolio?
          </h2>
          <p className="mb-8 max-w-[600px] mx-auto opacity-90">
            Let's discuss how our AI-powered solutions can help you achieve your investment goals.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}