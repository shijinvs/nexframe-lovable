import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart, Clock4, Rocket, Zap, Sparkles, ArrowRight, Target, Users, Code2, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  
  return (
    <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const WhyNexFrame = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="why-nexframe" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Why Choose NexFrame?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            Technology should empower, not complicate. We bring simplicity and expertise to ensure your success.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="mb-12" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              What NexFrame Does for You
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We transform your ideas into market-ready solutions with tangible benefits for your business
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-gray-200 rounded-full p-3 mr-4">
                  <Target className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Tailored Solutions</h4>
                  <p className="text-gray-700">Custom ERP and software solutions designed specifically for your business needs.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-gray-200 rounded-full p-3 mr-4">
                  <Sparkles className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Technology Stack</h4>
                  <p className="text-gray-700">Built with cutting-edge technologies that scale with your business growth.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-gray-200 rounded-full p-3 mr-4">
                  <Code2 className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Full-Stack Expertise</h4>
                  <p className="text-gray-700">Complete development capabilities from database to user interface.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-gray-200 rounded-full p-3 mr-4">
                  <Shield className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Quality & Security</h4>
                  <p className="text-gray-700">Robust, secure solutions with comprehensive testing and documentation.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Button size="lg" onClick={scrollToContact} className="group">
              Start Your Project Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNexFrame;