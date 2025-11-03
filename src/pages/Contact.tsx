import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, Building, Globe, CheckCircle2, Clock, Users } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  country: z.string().min(2, { message: "Country is required" }),
  phone: z.string().min(10, { message: "Please enter a valid contact number" }),
  company: z.string().min(2, { message: "Company name is required" }),
  requirement: z.string().min(10, { message: "Please describe your requirements (minimum 10 characters)" }),
  sendNDA: z.boolean().default(false),
  newsletter: z.boolean().default(false),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge and agree to our Privacy Policy"
  }),
  honeypot: z.string().max(0),
  timestamp: z.number()
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      country: "",
      phone: "",
      company: "",
      requirement: "",
      sendNDA: false,
      newsletter: false,
      privacyPolicy: false,
      honeypot: "",
      timestamp: Date.now()
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Basic bot protection
    if (data.honeypot) {
      toast.error("Invalid submission");
      return;
    }

    const submitTime = Date.now();
    const timeDiff = submitTime - data.timestamp;
    if (timeDiff < 3000) {
      toast.error("Please take your time to fill the form");
      return;
    }

    try {
      // Here you would integrate with your email service
      console.log("Form data:", data);
      
      toast.success("Thank you! We'll get back to you within one business day.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageLayout>
      <SEO 
        title="Contact Us - NexFrame Software Solutions"
        description="Get in touch with NexFrame Software Solutions. Quick response within one business day with transparent communication and tailored solutions."
        keywords={['contact', 'get in touch', 'software consultation', 'business inquiry']}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Let's Build Something Great Together
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Share your vision with us and we'll help transform it into reality
              </p>
            </motion.div>

            {/* Our Promise Section */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Promise</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Quick Response</h3>
                  <p className="text-sm text-gray-600">Within one business day</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Transparent Communication</h3>
                  <p className="text-sm text-gray-600">Clear and honest updates</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Tailored Solutions</h3>
                  <p className="text-sm text-gray-600">Aligned with your business goals</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden">
                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email ID *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Country */}
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Country *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Contact No *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Company */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Requirement */}
                  <FormField
                    control={form.control}
                    name="requirement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Requirement *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your expectations" 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="sendNDA"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal cursor-pointer">
                              Send me a copy of NDA
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newsletter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal cursor-pointer">
                              Subscribe to our Newsletter (We promise not to spam)
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyPolicy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal cursor-pointer">
                              Acknowledge and agree to our{' '}
                              <a 
                                href="https://docs.google.com/document/d/1MNbT9lA2ulm47WoS1CXFOhiFlLmFzB89l3khbDKVTjI/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 underline hover:text-gray-900"
                              >
                                Privacy Policy
                              </a>{' '}
                              *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-6 text-base"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
