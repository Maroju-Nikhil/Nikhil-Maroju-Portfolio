
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import { z } from 'zod';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address').max(254, 'Email too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long')
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sanitizeInput = (value: string): string => {
    return DOMPurify.sanitize(value, { ALLOWED_TAGS: [] });
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message)
    };
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'your_service_id';
      const templateId = 'your_template_id';
      const publicKey = 'your_public_key';
      
      // Template parameters
      const templateParams = {
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        to_email: 'marojunikhil2002@gmail.com', // Your email
        message: sanitizedData.message,
        reply_to: sanitizedData.email
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at marojunikhil2002@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData({
      ...formData,
      [name]: sanitizedValue
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects, share ideas, or explore new opportunities? 
            I'm always excited to connect with fellow builders and innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect & Innovate</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                I'm passionate about building impactful solutions across the entire technology stack. 
                Whether you're interested in discussing full-stack development, data engineering, 
                cloud architectures, mobile applications, or brainstorming the next big idea - 
                I'd love to hear from you! I believe in the power of collaboration and am always 
                open to learning from different perspectives and mindsets.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-200 mb-3">What I'm excited to discuss:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Full-stack development and modern web technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Data engineering and cloud-native solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Mobile app development and cross-platform solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Open source contributions and community building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Innovative product ideas and entrepreneurial ventures</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-blue-100">marojunikhil2002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-blue-100">+91 8179049021</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-blue-100">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded text-sm">
                <p className="font-semibold mb-2">📧 Setup Required:</p>
                <p>To enable email functionality, you need to:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Create a free EmailJS account at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a></li>
                  <li>Set up an email service and template</li>
                  <li>Replace the placeholder values in the code with your actual EmailJS credentials</li>
                </ol>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    placeholder="Your full name"
                    required
                    maxLength={100}
                  />
                  {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    placeholder="your.email@example.com"
                    required
                    maxLength={254}
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
                    placeholder="Share your ideas, project concepts, collaboration opportunities, or just say hello..."
                    required
                    maxLength={2000}
                  />
                  {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 disabled:opacity-50"
                >
                  <Send className="mr-2" size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
