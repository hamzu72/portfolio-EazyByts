import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)

  const categories = ['All', 'Web Development', 'Mobile', 'UI/UX', 'Branding']

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/1df18a5a-99fa-4e48-90dd-e084d3be1424.jpg',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2, 
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive web application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/dd1fb3eb-ab5c-4318-863e-bcb755ab1465.jpg',
      category: 'Mobile',
      tags: ['TypeScript', 'React', 'Firebase']
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      description: 'Complete overhaul of a corporate website focused on improving usability and conversion rates.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/8586a8f0-f04e-4c29-aa59-9df215b3e8f8.jpg',
      category: 'UI/UX',
      tags: ['Design', 'HTML/CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Restaurant Booking System',
      description: 'Online reservation system for restaurants with table management and customer notifications.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/5cdce498-c21a-4564-90ab-1375662273f2.jpg',
      category: 'Web Development',
      tags: ['Vue.js', 'Express', 'PostgreSQL']
    },
    {
      id: 5,
      title: 'Real Estate Listings',
      description: 'Property listing platform with search functionality, filtering, and agent contact forms.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/3faebcd8-297e-437f-8d0f-65d261e5967b.jpg',
      category: 'Web Development',
      tags: ['React', 'Redux', 'Node.js']
    },
    {
      id: 6,
      title: 'Travel Blog',
      description: 'Personal travel blog with photo galleries, location mapping, and interactive content.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/85dc8568-0cf3-486d-b4bd-f90bf80d5ef6.jpg',
      category: 'Branding',
      tags: ['WordPress', 'Design', 'SEO']
    },
  ]

  const filteredProjects = filter === 'All' || filter === null
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">My Projects</h1>
        <p className="text-muted-foreground md:text-lg">
          A collection of my work showcasing various skills and technologies
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category || (category === 'All' && filter === null) ? 'default' : 'outline'}
              onClick={() => setFilter(category === 'All' ? null : category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
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
  )
}
