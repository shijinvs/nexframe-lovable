import { useEffect, useRef, useState } from 'react';
import { Database, Code, Settings, Users, ArrowRight, CheckCircle } from "lucide-react";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NexFrameServices = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Database className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "ERP Systems",
      description: "Reliable ERP systems tailored for your business using Frappe and Odoo frameworks with complete customization.",
      features: [
        "Frappe Framework Development",
        "Odoo Implementation & Customization",
        "Custom ERP Architecture",
        "Data Migration & Integration",
        "Performance Optimization",
        "Training & Documentation"
      ],
      technologies: ["Python", "Frappe", "Odoo", "PostgreSQL", "MariaDB"],
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
    },
    {
      icon: <Code className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Mobile & Web Apps",
      description: "Custom mobile and web applications built with modern technologies for exceptional user experiences.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "Progressive Web Apps (PWA)",
        "Single Page Applications",
        "API Development & Integration",
        "Real-time Applications"
      ],
      technologies: ["React", "React Native", "Flutter", "Swift", "Kotlin", "JavaScript"],
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
      icon: <Settings className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Digital Transformation",
      description: "Comprehensive solutions to modernize your business processes and technology infrastructure.",
      features: [
        "Business Process Automation",
        "Legacy System Modernization",
        "Software Architecture Design",
        "Cloud Migration Services",
        "Security Assessment",
        "Performance Optimization"
      ],
      technologies: ["AWS", "Azure", "Docker", "Microservices", "CI/CD", "Security"],
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
    },
    {
      icon: <Users className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Design Solutions",
      description: "Human-centered design that creates intuitive, accessible, and beautiful user experiences.",
      features: [
        "UI/UX Design & Research",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Brand Identity Design",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.service-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={featuresRef}>
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Core Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Innovative Solutions for Modern Businesses
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We specialize in delivering high-quality, customized digital solutions that empower businesses 
            through cutting-edge technologies and tailored software products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-item group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build innovative solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact}>
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexFrameServices;