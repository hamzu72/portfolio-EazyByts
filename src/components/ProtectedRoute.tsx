import { Navigate, Outlet } from 'react-router'
import AdminLayout from './AdminLayout'
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

export default ProtectedRoute
