import { 
  BarChart3, 
  Calendar, 
  Edit, 
  Eye, 
  FileText, 
  Folder, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Users 
} from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { useAuth } from '../../hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  const stats = [
    { 
      title: 'Total Projects', 
      value: '12', 
      icon: <Folder className="h-4 w-4" />,
      change: '+2 this month' 
    },
    { 
      title: 'Blog Posts', 
      value: '28', 
      icon: <FileText className="h-4 w-4" />,
      change: '+4 this month' 
    },
    { 
      title: 'Messages', 
      value: '9', 
      icon: <MessageSquare className="h-4 w-4" />,
      change: '3 unread' 
    },
    { 
      title: 'Page Views', 
      value: '1,234', 
      icon: <Eye className="h-4 w-4" />,
      change: '+21% from last month' 
    },
  ]

  const recentProjects = [
    { id: 1, title: 'E-commerce Platform', date: '2025-06-10', status: 'Published' },
    { id: 2, title: 'Fitness Tracking App', date: '2025-06-05', status: 'Published' },
    { id: 3, title: 'Corporate Website Redesign', date: '2025-05-28', status: 'Published' },
    { id: 4, title: 'Mobile Game Interface', date: '2025-06-12', status: 'Draft' },
  ]

  const recentPosts = [
    { id: 1, title: 'The Future of Web Development: Trends to Watch', date: '2025-06-01', status: 'Published' },
    { id: 2, title: 'Designing for Accessibility: Best Practices', date: '2025-05-25', status: 'Published' },
    { id: 3, title: 'Building Responsive Layouts with CSS Grid', date: '2025-06-11', status: 'Draft' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Welcome back, {user?.name || 'Admin'}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="rounded-full p-1 bg-muted">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Projects</CardTitle>
            <Button size="sm" variant="ghost" className="gap-1">
              <Plus className="h-4 w-4" /> New
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex items-center justify-between bg-muted/40 p-3 rounded-md"
                >
                  <div>
                    <div className="font-medium">
                      {project.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(project.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span 
                      className={`text-xs mr-4 px-2 py-1 rounded-full ${
                        project.status === 'Published' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}
                    >
                      {project.status}
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Blog Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Posts</CardTitle>
            <Button size="sm" variant="ghost" className="gap-1">
              <Plus className="h-4 w-4" /> New
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="flex items-center justify-between bg-muted/40 p-3 rounded-md"
                >
                  <div>
                    <div className="font-medium line-clamp-1">
                      {post.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span 
                      className={`text-xs mr-4 px-2 py-1 rounded-full ${
                        post.status === 'Published' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}
                    >
                      {post.status}
                    </span>
                    <div className="flex">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 bg-muted/40 p-3 rounded-md">
              <Calendar className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Update Project Page</div>
                <div className="text-sm text-muted-foreground">Due June 15, 2025</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted/40 p-3 rounded-md">
              <FileText className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Write new blog post</div>
                <div className="text-sm text-muted-foreground">Due June 18, 2025</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted/40 p-3 rounded-md">
              <BarChart3 className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Generate monthly report</div>
                <div className="text-sm text-muted-foreground">Due June 30, 2025</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted/40 p-3 rounded-md">
              <Users className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <div className="font-medium">Client meeting</div>
                <div className="text-sm text-muted-foreground">June 20, 2025 at 2:00 PM</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
