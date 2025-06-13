import { ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { 
  LayoutDashboard, 
  FolderOpen, 
  FileEdit, 
  Mail, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import { useAuth } from '../hooks/useAuth'

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const menuItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: 'Dashboard', path: '/admin' },
    { icon: <FolderOpen className="w-4 h-4" />, label: 'Projects', path: '/admin/projects' },
    { icon: <FileEdit className="w-4 h-4" />, label: 'Blog', path: '/admin/blog' },
    { icon: <Mail className="w-4 h-4" />, label: 'Messages', path: '/admin/messages' },
    { icon: <Settings className="w-4 h-4" />, label: 'Settings', path: '/admin/settings' },
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Link to="/admin" className="font-semibold text-lg">Admin Panel</Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:w-64 border-r flex-col h-screen sticky top-0">
        <div className="p-4 border-b">
          <Link to="/admin" className="font-semibold text-lg">Admin Panel</Link>
        </div>
        <nav className="flex flex-col flex-1 p-2">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="flex items-center gap-2 text-destructive"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background border-r">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/admin" className="font-semibold text-lg">Admin Panel</Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 overflow-auto p-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-accent transition-colors mb-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="border-t p-4">
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  )
}

export default AdminLayout
