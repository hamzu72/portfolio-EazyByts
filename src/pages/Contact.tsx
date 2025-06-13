import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { toast } from '../components/ui/use-toast'
import { ToastAction } from '../components/ui/toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // This would be an API call in a real implementation
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contact Me</h1>
        <p className="text-muted-foreground md:text-lg">
          Have a project in mind or want to collaborate? Get in touch!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new projects and collaborations. 
              Feel free to reach out using the form or through any of the contact methods below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-primary/10 p-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">amxuansari@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-primary/10 p-2">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+91 9005010404</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-primary/10 p-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Integral University, Lucknow.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Office Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (PST)</p>
            <p className="text-muted-foreground">Weekend: By appointment only</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows={5}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
