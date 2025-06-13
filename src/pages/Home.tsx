import { ArrowRight, Code, Layout, PenTool, Star } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '../components/ui/button'

export default function Home() {
  const skills = [
    { 
      icon: <Code className="h-8 w-8 text-primary" />, 
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.'
    },
    { 
      icon: <Layout className="h-8 w-8 text-primary" />, 
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience.'
    },
    { 
      icon: <PenTool className="h-8 w-8 text-primary" />, 
      title: 'Content Creation',
      description: 'Producing high-quality content that engages and informs your target audience.'
    },
  ]

  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/e9de131b-52ab-45d3-a560-c9ad0fb4fadb.jpg',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2, 
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive web application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/a53be920-cbbd-489e-9fab-086cf5b4dd6f.jpg',
      tags: ['TypeScript', 'React', 'Firebase']
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      description: 'Complete overhaul of a corporate website focused on improving usability and conversion rates.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/87dfda80-820c-4d8c-8d79-ee849450e5c8.jpg',
      tags: ['Design', 'HTML/CSS', 'JavaScript']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Full-Stack Developer & Designer
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Creating beautiful, functional, and user-friendly digital experiences
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="bg-primary text-primary-foreground">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <img 
                src="https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/170647dc-63e6-428a-a7a9-5975080fc054.jpg" 
                alt="Developer" 
                className="rounded-lg object-cover aspect-square"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                With several years of industry experience, I specialize in creating responsive,
                accessible, and performance-optimized web applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical excellence with creative problem-solving to deliver
                solutions that not only meet but exceed client expectations.
              </p>
              <Link to="/contact">
                <Button variant="link" className="p-0 h-auto flex items-center gap-1">
                  Let's work together <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
            <p className="text-muted-foreground mt-2 mx-auto max-w-[700px]">
              Combining technical expertise with creative insight to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">
                A selection of my recent work and personal projects
              </p>
            </div>
            <Link to="/projects" className="mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group border rounded-lg overflow-hidden flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Testimonials</h2>
            <p className="text-muted-foreground mt-2 mx-auto max-w-[700px]">
              What my clients say about working with me
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <blockquote className="mb-4">
                "Working with this developer was an exceptional experience. They delivered our project on time, with all the functionality we needed and more. Their attention to detail and communication skills made the process smooth and enjoyable."
              </blockquote>
              <div className="font-medium">John Smith</div>
              <div className="text-sm text-muted-foreground">Intern, EazyByts</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <blockquote className="mb-4">
                "The redesign of our company website exceeded all our expectations. The modern look, improved functionality, and attention to our brand identity have significantly increased our conversions. Highly recommended!"
              </blockquote>
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Intern, EazyByts</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Your Project?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Let's collaborate to bring your ideas to life and create something amazing together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground">Get in Touch</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">Explore My Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
