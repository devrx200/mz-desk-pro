import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

import AdminLayout from './layouts/Admin'
import Landing from './views/Landing'
import About from './views/client/About'
import Contact from './views/client/Contact'
import Features from './views/client/Features'
import Pricing from './views/client/Pricing'
import Login from './views/client/Login'
import Register from './views/client/Register'
import Privacy from './views/client/Privacy'
import Terms from './views/client/Terms'
import Sitemap from './views/client/Sitemap'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />

          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/owner/*" element={<AdminLayout />} />
          <Route path="/operator/*" element={<AdminLayout />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)

