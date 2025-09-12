import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Database, Smartphone, Settings, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Reliable ERP Systems Tailored for You",
      description: "Complete ERP solutions built on Frappe and Odoo frameworks, designed to streamline your business operations.",
      features: [
        "Frappe Framework Development",
        "Odoo ERP Implementation & Customization", 
        "Custom ERP Architecture",
        "Data Migration & Integration",
        "Performance Optimization",
        "Training & Documentation"
      ],
      technologies: ["Python", "Frappe", "Odoo", "PostgreSQL", "MariaDB"]
    },
    {
      icon: Smartphone,
      title: "Custom Mobile & Web Applications",
      description: "Modern, responsive applications that deliver exceptional user experiences across all platforms.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "API Development & Integration",
        "Real-time Applications"
      ],
      technologies: ["React", "React Native", "Flutter", "Swift", "Kotlin", "JavaScript"]
    },
    {
      icon: Settings,
      title: "Software Solutions & Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business processes and technology stack.",
      features: [
        "Business Process Automation",
        "Legacy System Modernization",
        "Software Architecture Design",
        "Cloud Migration",
        "Security Assessment",
        "Performance Optimization"
      ],
      technologies: ["AWS", "Azure", "Docker", "Microservices", "CI/CD", "Security"]
    },
    {
      icon: Users,
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
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"]
    }
  ];

  const industries = [
    { name: "Startups", description: "Early-stage companies needing foundational technology systems" },
    { name: "Manufacturing", description: "Production and inventory management systems" },
    { name: "Retail & E-commerce", description: "Online retail and point-of-sale solutions" },
    { name: "Professional Services", description: "Consulting and service delivery platforms" },
    { name: "Healthcare", description: "Practice management and patient care systems" },
    { name: "Education", description: "Learning management and administrative systems" }
  ];

  const processSteps = [
    { step: 1, title: "Discovery & Planning", description: "Understanding requirements and defining scope" },
    { step: 2, title: "Design & Architecture", description: "Creating system blueprints and user experience designs" },
    { step: 3, title: "Agile Development", description: "Iterative development with regular client feedback" },
    { step: 4, title: "Quality Assurance", description: "Comprehensive testing and performance optimization" },
    { step: 5, title: "Deployment & Launch", description: "Secure and reliable system implementation" },
    { step: 6, title: "Maintenance & Support", description: "Ongoing system care and evolution" }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Services - NexFrame Software Solutions"
        description="Comprehensive IT solutions including ERP systems, mobile & web development, digital transformation, and design services. Expert Frappe and Odoo implementation."
        keywords={['ERP systems', 'Frappe development', 'Odoo implementation', 'mobile app development', 'web development', 'digital transformation', 'custom software']}
      />
      
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovative Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We specialize in delivering high-quality, customized digital solutions that empower businesses 
            through cutting-edge technologies and tailored software products.
          </p>
          <Button size="lg" className="mb-12">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((process, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We work with businesses across various industries, delivering tailored solutions 
            that meet specific sector requirements and challenges.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="mx-auto h-12 w-12 mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how we can help you build innovative solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;