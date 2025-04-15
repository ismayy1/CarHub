import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/headers/Header';
import { Footer } from './components/Footer';
import { Register } from './pages/Register';
import { Admin } from './pages/Admin';
import { AddCar } from './pages/AddCar';
import { Home } from './pages/Home';
import { Statistics } from './pages/Statistics';
import { Services } from './pages/Services';
import { CarDetails } from './pages/CarDetails';
import { ServiceDetails } from './pages/ServiceDetails';
import { ServicesHeader } from './components/headers/ServiceHeader';
import { StatisticsHeader } from './components/headers/StatisticsHeader';
import { AdminHeader } from './components/headers/AdminHeader';
import { AddService } from './pages/AddService';
import { Login } from './pages/Login';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/register" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
          {/* <Header /> */}
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Header />
                  <Home />
                </>
              } 
            />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminHeader />
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/add-car"
              element={
                <ProtectedRoute>
                  <AddCar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/add-service"
              element={
                <ProtectedRoute>
                  <AddService />
                </ProtectedRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <>
                  <StatisticsHeader />
                  <Statistics />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <ServicesHeader />
                  <Services />
                </>
              }
            />
            <Route
              path="/service/:id"
              element={
                <>
                  <ServiceDetails />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;