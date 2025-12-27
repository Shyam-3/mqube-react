import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from './admin/pages/Dashboard'
import { AdminLogin } from './admin/pages/Login'
import './App.css'
import { ScrollToTop } from './components/ScrollToTop'
import { UserLayout } from './components/UserLayout'
import { AboutUs } from './user/pages/AboutUs'
import { ContactUs } from './user/pages/ContactUs'
import { FreeDemo } from './user/pages/FreeDemo'
import { Home } from './user/pages/Home'
import { HowItWorks } from './user/pages/HowItWorks'
import { Services } from './user/pages/Services'
import { Student } from './user/pages/Student'
import { Teacher } from './user/pages/Teacher'
import { Testimonials } from './user/pages/Testimonials'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/howItWorks" element={<HowItWorks />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/freeDemo" element={<FreeDemo />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
