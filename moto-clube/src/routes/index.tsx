import { Routes, Route, Navigate } from 'react-router-dom';

// Importando as páginas
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Coalition from '../pages/Coalition';
import Contact from '../pages/Contact';
import AdminLogin from '../pages/Admin/Login';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminMembers from '../pages/Admin/Members';
import AdminEvents from '../pages/Admin/Events';
import AdminPolls from '../pages/Admin/Polls';
import AdminMessages from '../pages/Admin/Messages';
import UserDashboard from '../pages/UserDashboard';

const PrivateAdminRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('adminToken') !== null;
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

const PrivateUserRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('userToken') !== null;
  return isAuthenticated ? children : <Navigate to="/" />;
};

const Router = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/coalition" element={<Coalition />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* User Routes */}
      <Route
        path="/minha-conta"
        element={
          <PrivateUserRoute>
            <UserDashboard />
          </PrivateUserRoute>
        }
      />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateAdminRoute>
            <AdminDashboard />
          </PrivateAdminRoute>
        }
      />
      <Route
        path="/admin/members"
        element={
          <PrivateAdminRoute>
            <AdminMembers />
          </PrivateAdminRoute>
        }
      />
      <Route
        path="/admin/events"
        element={
          <PrivateAdminRoute>
            <AdminEvents />
          </PrivateAdminRoute>
        }
      />
      <Route
        path="/admin/polls"
        element={
          <PrivateAdminRoute>
            <AdminPolls />
          </PrivateAdminRoute>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <PrivateAdminRoute>
            <AdminMessages />
          </PrivateAdminRoute>
        }
      />

      {/* Redirect any unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router; 