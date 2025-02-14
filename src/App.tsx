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

                <ProtectedRoute>
                  <Header />
                  <Home />
                </ProtectedRoute>

                // <Home />
              } 
            />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/register" element={<Register />} />
            
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
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
              path="/statistics"
              element={
                <ProtectedRoute>
                  <Statistics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <ServicesHeader />
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/service/:id"
              element={
                <ProtectedRoute>
                  <ServiceDetails />
                </ProtectedRoute>
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