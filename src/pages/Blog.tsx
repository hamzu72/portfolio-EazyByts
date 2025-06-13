import { useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Explore the emerging technologies and methodologies shaping the future of web development and how they might impact your projects.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/0c92d551-4063-4aa5-8d93-7d66bf4e6586.jpg',
      date: '2025-06-01',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Designing for Accessibility: Best Practices',
      excerpt: 'Learn how to make your web applications more accessible to users with disabilities and improve the overall user experience.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/aab079d1-bf94-4978-8235-868c4e570a7a.jpg',
      date: '2025-05-25',
      readTime: '7 min read',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Optimizing React Performance: Advanced Techniques',
      excerpt: 'Discover advanced strategies for optimizing your React applications and delivering a smoother user experience.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/7a6112f2-a861-4274-972e-f0b2a39659c8.jpg',
      date: '2025-05-18',
      readTime: '8 min read',
      category: 'Development'
    },
    {
      id: 4,
      title: 'Building a Personal Brand as a Developer',
      excerpt: 'How to establish your presence in the developer community and showcase your expertise to potential clients and employers.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/db171fd6-93c4-41b3-8fea-8c4bce31371a.jpg',
      date: '2025-05-10',
      readTime: '6 min read',
      category: 'Career'
    },
    {
      id: 5,
      title: 'The Role of AI in Modern Web Design',
      excerpt: 'Exploring how artificial intelligence is changing web design practices and creating new possibilities for developers and designers.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/829ee780-8c24-452d-8153-6e4105c7bcd7.jpg',
      date: '2025-05-02',
      readTime: '9 min read',
      category: 'Technology'
    },
    {
      id: 6,
      title: 'From Concept to Deployment: A Project Journey',
      excerpt: 'Follow the complete lifecycle of a web application project from initial concept to final deployment and maintenance.',
      image: 'https://pub-cdn.sider.ai/u/U0E5HL6G32W/web-coder/684c86db060d7d85c7140962/resource/d0d8ffba-f0de-4a3e-8691-033a41d9ed79.jpg',
      date: '2025-04-24',
      readTime: '10 min read',
      category: 'Project Management'
    },
  ]

  const filteredPosts = searchTerm 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Blog</h1>
        <p className="text-muted-foreground md:text-lg">
          Insights, tutorials, and thoughts on web development and design
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="flex flex-col border rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img 
                src={post.image} 
                alt={post.title}
                className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                {post.category}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
              <Button variant="link" className="p-0 h-auto flex items-center">
                Read More <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-muted-foreground">Try adjusting your search term</p>
        </div>
      )}
    </div>
  )
}
