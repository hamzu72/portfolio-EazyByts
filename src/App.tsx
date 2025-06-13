import { HashRouter, Route, Routes } from 'react-router'
import { Toaster } from './components/ui/toaster'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Dashboard from './pages/admin/Dashboard'
import Login from './pages/admin/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import { ThemeProvider } from './components/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
        <Toaster />
      </HashRouter>
    </ThemeProvider>
  )
}
